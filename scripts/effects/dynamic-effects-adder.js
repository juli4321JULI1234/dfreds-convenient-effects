import Constants from '../constants.js';
import Settings from '../settings.js';

/**
 * Handles adding dynamic effects for certain effects
 */
export default class DynamicEffectsAdder {
  constructor() {
    this._settings = new Settings();
  }

  /**
   * Adds dynamic effects for specific effects
   *
   * @param {object} effect - the object form of an ActiveEffect to handle
   * @param {Actor} actor - the affected actor
   */
  async addDynamicEffects(effect, actor) {
    switch (effect.label.toLowerCase()) {
      case '聖言術':
        await this._addDivineWordEffects(effect, actor);
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
      case '守護靈光':
        this._addAuraofProtectionEffects(effect, actor);
        break;
      case '暮光聖域':
        this._addTwilightShroudEffects(effect, actor);
        break;
    }
  }

  async _addDivineWordEffects(effect, actor) {
    const remainingHp = actor.system.attributes.hp.value;

    if (remainingHp <= 20) {
      await actor.update({
        'system.attributes.hp.value': 0,
      });
      await game.dfreds.effectInterface.addEffect({
        effectName: '死亡',
        uuid: actor.uuid,
        overlay: true,
      });
      effect.flags[Constants.MODULE_ID][Constants.FLAGS.DESCRIPTION] =
        'Killed instantly';
    } else if (remainingHp <= 30) {
      await game.dfreds.effectInterface.addEffect({
        effectName: '目盲',
        uuid: actor.uuid,
        origin: `Convenient Effect: ${effect.label}`,
      });
      await game.dfreds.effectInterface.addEffect({
        effectName: '耳聾',
        uuid: actor.uuid,
        origin: `Convenient Effect: ${effect.label}`,
      });
      await game.dfreds.effectInterface.addEffect({
        effectName: '震懾',
        uuid: actor.uuid,
        origin: `Convenient Effect: ${effect.label}`,
      });
      effect.flags[Constants.MODULE_ID][Constants.FLAGS.DESCRIPTION] =
        '目盲, 耳聾, 和震懾1持續小時。';
      effect.duration.seconds = Constants.SECONDS.IN_ONE_HOUR;
    } else if (remainingHp <= 40) {
      await game.dfreds.effectInterface.addEffect({
        effectName: '目盲',
        uuid: actor.uuid,
        origin: `Convenient Effect: ${effect.label}`,
      });
      await game.dfreds.effectInterface.addEffect({
        effectName: '耳聾',
        uuid: actor.uuid,
        origin: `Convenient Effect: ${effect.label}`,
      });
      effect.flags[Constants.MODULE_ID][Constants.FLAGS.DESCRIPTION] =
        '目盲和耳聾持續10分鐘。';
      effect.duration.seconds = Constants.SECONDS.IN_TEN_MINUTES;
    } else if (remainingHp <= 50) {
      await game.dfreds.effectInterface.addEffect({
        effectName: '耳聾',
        uuid: actor.uuid,
        origin: `Convenient Effect: ${effect.label}`,
      });
      effect.flags[Constants.MODULE_ID][Constants.FLAGS.DESCRIPTION] =
        '耳聾持續1分鐘';
      effect.duration.seconds = Constants.SECONDS.IN_ONE_MINUTE;
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

    if (this._settings.integrateWithAte) {
      effect.changes.push(
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

    if (isZealot) {
      effect.changes.push(
        ...[
          {
            key: 'flags.${this._flagPrefix}.optional.NAME.damage.mwak',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '+1d6[radiant]+floor(@classes.barbarian.levels / 2)[radiant]',
          },
          {
            key: 'flags.${this._flagPrefix}.optional.NAME.damage.rwak',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '+1d6[radiant]+floor(@classes.barbarian.levels / 2)[radiant]',
          },
          {
            key: 'flags.${this._flagPrefix}.optional.NAME.count',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: 'turn',
          },
          {
            key: 'flags.${this._flagPrefix}.optional.NAME.label',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '神性狂怒',
          },
        ]
      );
    }
  }

  _determineIfPersistantRage(effect, barbarianClass) {
    if (barbarianClass.system.levels > 14) {
      effect.duration.seconds = null;
      effect.duration.rounds = null;
      effect.duration.turns = null;
    }
  }

  _addAuraofProtectionEffects(effect, actor) {
    const paladinClass = actor.items.find(
      (item) => item.type === 'class' && item.name === 'Paladin'
    );

    if (!paladinClass) {
      ui.notifications.warn('Selected actor is not a Paladin'); 
      return;
    }

    this._subAura(effect, actor, paladinClass);
    this._addRadius(effect, paladinClass);
  }

  async _subAura(effect, actor, paladinClass) {
    if (paladinClass.system.levels > 9) { //Aura of Courage
      effect.changes.push({          
        key: 'system.traits.ci.value',
        mode: CONST.ACTIVE_EFFECT_MODES.ADD,
        value: 'frightened',
        priority: 5,
      });  
    }
    if (paladinClass.system.levels > 6) {
      if (paladinClass.subclass?.identifier === 'oath-of-devotion') { //Aura of Devotion
        effect.changes.push({          
          key: 'system.traits.ci.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'charmed',
          priority: 5,
          });  
      } else if (paladinClass.subclass?.identifier === 'oath-of-the-ancients') { //Aura of Warding
        effect.changes.push({          
          key: 'system.traits.dr.custom',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '法術傷害',
          priority: 5,
        });  
      } else if (paladinClass.subclass?.identifier === 'oath-of-the-watchers') { //Aura of Sentinel
        effect.changes.push({          
          key: 'system.attributes.init.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '@prof',
          priority: 5,
        });  
      } else if (paladinClass.subclass?.identifier === 'oath-of-glory') { //Aura of Alacrity
        await game.dfreds.effectInterface.addEffect({
          effectName: '迅捷靈光',
          uuid: actor.uuid,
          origin: `Convenient Effect: ${effect.label}`,
        });
      }
    }
  }

  _addRadius(effect, paladinClass) {
    if (paladinClass.system.levels > 17) {
      effect.flags['ActiveAuras']['radius'] = 30;
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
