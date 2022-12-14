import Constants from '../constants.js';

/**
 * Data class for defining an effect
 */
export default class Effect {
  constructor({
    customId = null,
    name,
    description,
    icon,
    tint = null,
    seconds,
    rounds,
    turns,
    isDynamic = false,
    isViewable = true,
    flags = {},
    changes = [],
    atlChanges = [],
    tokenMagicChanges = [],
    nestedEffects = [],
  }) {
    this.customId = customId;
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.tint = tint;
    this.seconds = seconds;
    this.rounds = rounds;
    this.turns = turns;
    this.isDynamic = isDynamic;
    this.isViewable = isViewable;
    this.flags = flags;
    this.changes = changes;
    this.atlChanges = atlChanges;
    this.tokenMagicChanges = tokenMagicChanges;
    this.nestedEffects = nestedEffects;
  }

  /**
   * Converts the effect data to an active effect data object
   *
   * @param {object} params - the params to use for conversion
   * @param {string} params.origin - the origin to add to the effect
   * @param {boolean} params.overlay - whether the effect is an overlay or not
   * @param {boolean} params.includeAte - whether to include ATE effects or not
   * @param {boolean} params.includeTokenMagic - whether to include token magic effects or not
   * @returns {object} The active effect data object for this effect
   */
  convertToActiveEffectData({
    origin,
    overlay,
    includeAte,
    includeTokenMagic,
  } = {}) {
    let changes = this.changes;

    if (includeAte && this.atlChanges.length > 0) {
      changes.push(...this.atlChanges);
    }

    if (includeTokenMagic && this.tokenMagicChanges.length > 0) {
      changes.push(...this.tokenMagicChanges);
    }

    return {
      id: this._id,
      name: this.name,
      label: this.name,
      icon: this.icon,
      tint: this.tint,
      duration: this._getDurationData(),
      flags: foundry.utils.mergeObject(this.flags, {
        core: {
          statusId: this._id,
          overlay,
        },
        isConvenient: true,
        convenientDescription: this.description,
      }),
      origin,
      transfer: false,
      changes,
    };
  }

  /**
   * Converts the Effect into an object
   *
   * @returns {object} the object representation of this effect
   */
  convertToObject() {
    return deepClone({ ...this });
  }

  get _id() {
    return `Convenient Effect: ${this.name}`;
  }

  _getDurationData() {
    if (game.combat) {
      return {
        startRound: game.combat.round,
        rounds: this._getCombatRounds(),
        turns: this.turns,
      };
    } else {
      return {
        startTime: game.time.worldTime,
        seconds: this._getSeconds(),
      };
    }
  }

  _getCombatRounds() {
    if (this.rounds) {
      return this.rounds;
    }

    if (this.seconds) {
      return this.seconds / CONFIG.time.roundTime;
    }

    return undefined;
  }

  _getSeconds() {
    if (this.seconds) {
      return this.seconds;
    }

    if (this.rounds) {
      return this.rounds * CONFIG.time.roundTime;
    }

    return undefined;
  }
}
