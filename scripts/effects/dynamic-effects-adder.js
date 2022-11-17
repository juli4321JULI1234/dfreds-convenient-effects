import Constants from '../constants.js';

/**
 * Handles adding dynamic effects for certain effects
 */
export default class DynamicEffectsAdder {
  /**
   * Adds dynamic effects for specific effects
   *
   * @param {Effect} effect - the effect to handle
   * @param {Actor5e} actor - the effected actor
   */
  async addDynamicEffects(effect, actor) {
    switch (effect.name.toLowerCase()) {
      case '聖言術':
        this._addDivineWordEffects(effect, actor);
        break;
      case '變巨':
        this._addEnlargeEffects(effect, actor);
        break;
      case '狂暴':
        this._addRageEffects(effect, actor);
        break;
      case '縮小':
        this._addReduceEffects(effect, actor);
        break;
      case '暮光聖域':
        this._addTwilightShroudEffects(effect, actor);
        break;
    }
  }

  _addDivineWordEffects(effect, actor) {
    const remainingHp = actor.system.attributes.hp.value;
    const blinded = game.dfreds.effectInterface.findEffectByName('Blinded');
    const deafened = game.dfreds.effectInterface.findEffectByName('Deafened');
    const stunned = game.dfreds.effectInterface.findEffectByName('Stunned');

    if (remainingHp <= 20) {
      // killed, handled in actor-updater
      effect.description = 'Killed instantly';
    } else if (remainingHp <= 30) {
      // TODO this?
      // await game.dfreds.effectInterface.addEffect({
      //   effectName: 'Blinded',
      //   uuid: actor.uuid,
      //   origin: effect.origin,
      // });
      effect.description = 'Blinded, deafened, and stunned for 1 hour';
      effect.seconds = Constants.SECONDS.IN_ONE_HOUR;
      effect.changes.push(
        ...blinded.changes,
        ...deafened.changes,
        ...stunned.changes
      );
    } else if (remainingHp <= 40) {
      effect.description = 'Deafened and blinded for 10 minutes';
      effect.seconds = Constants.SECONDS.IN_TEN_MINUTES;
      effect.changes.push(...blinded.changes, ...deafened.changes);
    } else if (remainingHp <= 50) {
      effect.description = 'Deafened for 1 minute';
      effect.seconds = Constants.SECONDS.IN_ONE_MINUTE;
      effect.changes.push(...deafened.changes);
    }
  }

  _addEnlargeEffects(effect, actor) {
    const size = actor.system.traits.size;
    const index = Constants.SIZES_ORDERED.indexOf(size);

    this._addSizeChangeEffects(
      effect,
      Math.min(Constants.SIZES_ORDERED.length - 1, index + 1)
    );
  }

  _addReduceEffects(effect, actor) {
    const size = actor.system.traits.size;
    const index = Constants.SIZES_ORDERED.indexOf(size);

    this._addSizeChangeEffects(effect, Math.max(0, index - 1));
  }

  _addSizeChangeEffects(effect, sizeIndex) {
    const size = Constants.SIZES_ORDERED[sizeIndex];
    const tokenSize = game.dnd5e.config.tokenSizes[size];

    effect.changes.push({
      key: 'system.traits.size',
      mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
      value: size,
    });

    effect.atlChanges.push(
      ...[
        {
          key: 'ATL.width',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: tokenSize,
        },
        {
          key: 'ATL.height',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: tokenSize,
        },
      ]
    );
  }

  _addRageEffects(effect, actor) {
    const barbarianClass = actor.items.find(
      (item) => item.type === 'class' && item.name === 'Barbarian'
    );

    if (!barbarianClass) {
      ui.notifications.warn('Selected actor is not a Barbarian');
      return;
    }

    this._addResistancesIfBearTotem(effect, actor, barbarianClass);
    this._addDamageIfZealot(effect, actor, barbarianClass);
    this._determineIfPersistantRage(effect, barbarianClass);
  }

  _addResistancesIfBearTotem(effect, actor, barbarianClass) {
    const isTotemWarrior =
      barbarianClass.subclass?.identifier === 'path-of-the-totem-warrior';
    const hasBearTotemSpirit = actor.items.find(
      (item) => item.type === 'feat' && item.name === 'Totem Spirit: Bear'
    );

    if (isTotemWarrior && hasBearTotemSpirit) {
      effect.changes.push(
        ...[
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'acid',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'cold',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'fire',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'force',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'lightning',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'necrotic',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'poison',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'physical',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'radiant',
          },
          {
            key: 'system.traits.dr.value',
            mode: CONST.ACTIVE_EFFECT_MODES.ADD,
            value: 'thunder',
          },
        ]
      );
    }
  }

  _addDamageIfZealot(effect, actor, barbarianClass) {
    const isZealot =
      barbarianClass.subclass?.identifier === 'path-of-the-zealot';

    if (isZealott) {
      effect.changes.push(
        ...[
          {
            key: 'flags.midi-qol.optional.NAME.damage.mwak',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '+1d6[radiant]+floor(@classes.barbarian.levels / 2)[radiant]',
          },
          {
            key: 'flags.midi-qol.optional.NAME.damage.rwak',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '+1d6[radiant]+floor(@classes.barbarian.levels / 2)[radiant]',
          },
          {
            key: 'flags.midi-qol.optional.NAME.criticalDamage',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '+2d6[radiant]+floor(@classes.barbarian.levels / 2)[radiant]',
          },
          {
            key: 'flags.midi-qol.optional.NAME.count',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: 'turn',
          },
          {
            key: 'flags.midi-qol.optional.NAME.label',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '神性狂怒',
          },
        ]
      );
    }
  }

  _determineIfPersistantRage(effect, barbarianClass) {
    if (barbarianClass.system.levels > 14) {
      effect.seconds = undefined;
    }
  }

  _addTwilightShroudEffects(effect, actor) {
    const clericClass = actor.items.find(
      (item) => item.type === 'class' && item.name === 'Cleric'
    );

    if (!clericClass) {
      ui.notifications.warn('Selected actor is not a Cleric');
      return;
    }
    
    if (clericClass.system.levels > 16) {
      effect.changes.push({
          key: 'macro.CE',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '半掩蔽',
          priority: '25',
      });
    }
  }
}
