import Effect from './effect.js';
import Constants from '../constants.js';
import Settings from '../settings.js';
import CustomEffectsHandler from './custom-effects-handler.js';

/**
 * Defines all of the effect definitions
 */
export default class EffectDefinitions {
  constructor() {
    this._customEffectsHandler = new CustomEffectsHandler();
    this._settings = new Settings();
  }

  /**
   * Get all effects
   *
   * @returns {Effect[]} all the effects
   */
  get all() {
    return [
      ...this.conditions,
      ...this.customEffects,
      ...this.spells,
      ...this.classFeatures,
      ...this.equipment,
      ...this.other,
    ];
  }

  /**
   * Get all the condition effects
   *
   * @returns {Effect[]} all the condition effects
   */
  get conditions() {
    return [
      this._blinded,
      this._charmed,
      this._concentrating,
      this._dead,
      this._deafened,
      this._exhaustion1,
      this._exhaustion2,
      this._exhaustion3,
      this._exhaustion4,
      this._exhaustion5,
      this._frightened,
      this._grappled,
      this._incapacitated,
      this._invisible,
      this._paralyzed,
      this._petrified,
      this._poisoned,
      this._prone,
      this._restrained,
      this._stunned,
      this._unconscious,
      this._wounded,
    ];
  }

  /**
   * Get all the custom effects
   *
   * @returns {Effect[]} all the custom effects
   */
  get customEffects() {
    return this._customEffectsHandler.getCustomEffects();
  }

  /**
   * Get all the spell effects
   *
   * @returns {Effect[]} all the spell effects
   */
  get spells() {
    return [
      this._acidArrow, // TODO figure out higher level casting
      this._aid, // TODO figure out higher level casting
      this._alterSelf,
      this._antilifeShell,
      this._arcaneHand,
      this._bane,
      this._barkskin,
      this._beaconOfHope,
      this._blackTentacles,
      this._bless,
      this._blindnessDeafness,
      this._blindnessDeafnessBlindness,
      this._blindnessDeafnessDeafness,
      this._blur,
      this._causeFear,
      this._charmPerson,
      this._command,
      this._comprehendLanguages,

      this._contagion,
      this._contagionBlindingSickness,
      this._contagionFilthFever,
      this._contagionFleshRot,
      this._contagionMindfire,
      this._contagionSeizure,
      this._contagionSlimyDoom,

      this._darkvision,
      this._disguiseSelf,
      this._divineFavor,
      this._divineWord,
      this._daylight,

      this._enlargeReduce,
      this._enlargeReduceEnlarge,
      this._enlargeReduceReduce,

      this._enhanceAbility,
      this._enhanceAbilityBearsEndurance,
      this._enhanceAbilityBullsStrength,
      this._enhanceAbilityCatsGrace,
      this._enhanceAbilityEaglesSplendor,
      this._enhanceAbilityFoxsCunning,
      this._enhanceAbilityOwlsWisdom,

      this._faerieFire,
      this._falseLife, // TODO figure out higher level casting
      this._featherFall,
      this._feeblemind,

      this._fireShield,
      this._fireShieldColdResistance,
      this._fireShieldFireResistance,

      this._findThePath,
      this._fly,
      this._foresight,
      this._freedomOfMovement,
      this._frostbite,
      this._gaseousForm,
      this._globeOfInvulnerability,
      this._greaterInvisibility,
      this._guidance,
      this._guidingBolt,
      this._haste,
      this._heroesFeast,
      this._heroism,
      this._hex,
      this._hideousLaughter,
      this._holdMonster,
      this._holdPerson,
      this._holyAura,
      this._huntersMark,
      this._hypnoticPattern,

      this._invisibility,
      this._irresistibleDance,
      this._jump,
      this._light,
      this._longstrider,
      this._mageArmor,
      this._mindBlank,
      this._mirrorImage,
      this._passWithoutTrace,

      this._protectionFromEnergy,
      this._protectionFromEnergyAcid,
      this._protectionFromEnergyCold,
      this._protectionFromEnergyFire,
      this._protectionFromEnergyLightning,
      this._protectionFromEnergyThunder,
      this._protectionFromPoison,

      this._protectionFromEvilAndGood,
      this._rayOfFrost,
      this._regenerate,
      this._resilientSphere,
      this._resistance,
      this._rimeBindingIce,
      this._sanctuary,
      this._shield,
      this._shieldOfFaith,
      this._slow,
      this._speakWithAnimals,
      this._speakWithDead,
      this._speakWithPlants,
      this._spiderClimb,
      this._spiritGuardians,
      this._spiritualWeapon,
      this._stoneskin,
      this._suggestion,
      this._telekinesis,
      this._trueStrike,
      this._viciousMockery,
      this._wardingBond,
      this._waterBreathing,
      this._waterWalk,
    ];
  }

  /**
   * Get all the class feature effects
   *
   * @returns {Effect[]} all the class feature effects
   */
  get classFeatures() {
    return [
      this._bardicInspiration,
      this._bardicInspirationD6,
      this._bardicInspirationD8,
      this._bardicInspirationD10,
      this._bardicInspirationD12,
      this._channelDivinitySacredWeapon,
      this._channelDivinityTurnTheUnholy,
      this._channelDivinityTurnUndead,
      this._eyesofNight,
      this._kiEmptyBody,
      this._kiPatientDefense,
      this._steadyAim,
      this._stunningStrike,
      this._twilightSanctuary,
      this._rage,
      this._recklessAttack,
    ];
  }

  /**
   * Get all the equipment effects
   *
   * @returns {Effect[]} all the equipment effects
   */
  get equipment() {
    return [
      this._bullseyeLantern,
      this._candle,
      this._hoodedLantern,
      this._lantern,
      this._torch,
    ];
  }

  /**
   * Get all the other effects
   *
   * @returns {Effect[]} all the other effects
   */
  get other() {
    return [
      this._bonusAction,
      this._coverHalf,
      this._coverThreeQuarters,
      this._encumbered,
      this._dodge,
      this._flanked,
      this._flanking,
      this._greatWeaponMaster,
      this._heavilyEncumbered,
      this._inspiration,
      this._rangedDisadvantage,
      this._reaction,
      this._ready,
      this._sharpshooter,
    ];
  }

  /* Condition Effects */
  get _blinded() {
    return new Effect({
      name: 'Blinded',
      description:
        'Disadvantage on attack rolls while granting advantage to all who attack',
      icon: 'modules/dfreds-convenient-effects/images/blinded.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _charmed() {
    return new Effect({
      name: 'Charmed',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/charmed.svg',
    });
  }

  get _concentrating() {
    return new Effect({
      name: 'Concentrating',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/concentrating.svg',
    });
  }

  get _dead() {
    return new Effect({
      name: 'Dead',
      description: 'No active effects',
      icon: 'icons/svg/skull.svg',
    });
  }

  get _deafened() {
    return new Effect({
      name: 'Deafened',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/deafened.svg',
    });
  }

  get _exhaustion1() {
    return new Effect({
      name: 'Exhaustion 1',
      description: 'Disadvantage on all ability checks',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion1.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _exhaustion2() {
    return new Effect({
      name: 'Exhaustion 2',
      description: 'Disadvantage on all ability checks and half movement',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion2.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
      ],
    });
  }

  get _exhaustion3() {
    return new Effect({
      name: 'Exhaustion 3',
      description:
        'Disadvantage on all ability checks, half movement, disadvantage on all attacks, and disadvantage on all saving throws',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion3.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _exhaustion4() {
    return new Effect({
      name: 'Exhaustion 4',
      description:
        'Disadvantage on all ability checks, half movement, disadvantage on all attacks, disadvantage on all saving throws, and half HP',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion4.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.hp.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '0.5',
          priority: 25,
        },
      ],
    });
  }

  get _exhaustion5() {
    return new Effect({
      name: 'Exhaustion 5',
      description:
        'Disadvantage on all ability checks, zero movement, disadvantage on all attacks, disadvantage on all saving throws, and half HP',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion5.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.hp.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '0.5',
          priority: 25,
        },
      ],
    });
  }

  get _frightened() {
    return new Effect({
      name: 'Frightened',
      description: 'Disadvantage on all attack rolls and ability checks',
      icon: 'modules/dfreds-convenient-effects/images/frightened.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _grappled() {
    return new Effect({
      name: 'Grappled',
      description: 'No movement',
      icon: 'modules/dfreds-convenient-effects/images/grappled.svg',
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
      ],
    });
  }

  get _incapacitated() {
    return new Effect({
      name: 'Incapacitated',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/incapacitated.svg',
    });
  }

  get _invisible() {
    return new Effect({
      name: 'Invisible',
      description:
        'Grants advantage on attack rolls while forcing disadvantage to all who attack',
      icon: 'modules/dfreds-convenient-effects/images/invisible.svg',
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _paralyzed() {
    return new Effect({
      name: 'Paralyzed',
      description:
        'Remove all movement, fail all dexterity and strength saves, grant advantage to all who attack, and all melee attacks that hit are criticals',
      icon: 'modules/dfreds-convenient-effects/images/paralyzed.svg',
      changes: [
        {
          key: 'flags.midi-qol.fail.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.fail.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.critical.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.critical.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
      ],
    });
  }

  get _petrified() {
    return new Effect({
      name: 'Petrified',
      description:
        'Remove all movement, grant advantage to all who attack, and add damage resistance to all magical and physical attacks',
      icon: 'modules/dfreds-convenient-effects/images/petrified.svg',
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'physical',
        },
        {
          key: 'data.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'magical',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
      ],
    });
  }

  get _poisoned() {
    return new Effect({
      name: 'Poisoned',
      description: 'Disadvantage on all attack rolls and ability checks',
      icon: 'modules/dfreds-convenient-effects/images/poisoned.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _prone() {
    return new Effect({
      name: 'Prone',
      description:
        'Grant advantage to all who melee attack, disadvantage to all who range attack, and disadvantage on all attacks',
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.rwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.rsak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
      ],
    });
  }

  get _restrained() {
    return new Effect({
      name: 'Restrained',
      description:
        'Disadvantage on dexterity saving throws, disadvantage on all attacks, grant advantage to all who attack, and no movement',
      icon: 'modules/dfreds-convenient-effects/images/restrained.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
      ],
    });
  }

  get _stunned() {
    return new Effect({
      name: 'Stunned',
      description:
        'Fail all dexterity and strength saves and grant advantage to all who attack',
      icon: 'modules/dfreds-convenient-effects/images/stunned.svg',
      changes: [
        {
          key: 'flags.midi-qol.fail.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.fail.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _unconscious() {
    return new Effect({
      name: 'Unconscious',
      description:
        'Fail all dexterity and strength saves, grants advantage to all who attack, and all melee attacks are criticals',
      icon: 'icons/svg/unconscious.svg',
      changes: [...this._paralyzed.changes, ...this._prone.changes],
    });
  }

  get _wounded() {
    return new Effect({
      name: 'Wounded',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/wounded.svg',
    });
  }

  /* Spell Effects */
  get _acidArrow() {
    return new Effect({
      name: '馬友夫強酸箭',
      description: 'Causes 2d4 acid damage at the end of next turn',
      icon: 'systems/dnd5e/icons/spells/needles-acid-2.jpg',
      changes: [
        {
          key: 'flags.midi-qol.OverTime',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value:
            'turn=end,removeCondition=true,damageRoll=2d4,damageType=acid,label=Acid Arrow',
        },
      ],
    });
  }

  get _aid() {
    return new Effect({
      name: '援助術',
      description: 'Add 5 to current and maximum hit points for 8 hours',
      icon: 'systems/dnd5e/icons/spells/heal-sky-1.jpg',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      flags: {
        requiresActorUpdate: true,
      },
    });
  }

  get _alterSelf() {
    return new Effect({
      name: '變造自身',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/magic/control/debuff-energy-hold-green.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _antilifeShell() {
    return new Effect({
      name: '反活物護罩',
      description: 'No active effects and lasts for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _arcaneHand() {
    return new Effect({
      name: 'Arcane Hand',
      description: 'No active effects and lasts for 1 minute',
      icon: 'systems/dnd5e/icons/spells/fireball-eerie-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _bane() {
    return new Effect({
      name: '災禍術',
      description:
        'Subtract 1d4 from all saving throws and attack rolls for 1 minute',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.msak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.rsak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
      ],
    });
  }

  get _barkskin() {
    // TODO token magic effects
    return new Effect({
      name: '樹膚術',
      description: 'Upgrade AC to 16 for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-orange-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '16',
          priority: 5,
        },
      ],
    });
  }

  get _beaconOfHope() {
    return new Effect({
      name: '希望信標',
      description:
        'Adds advantage to wisdom saving throws and death saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/light-sky-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.save.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.deathSave',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.max.damage.heal',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _blackTentacles() {
    return new Effect({
      name: '艾伐黑觸手',
      description: 'Apply the effects of the restrained condition for 1 minute',
      icon: 'systems/dnd5e/icons/spells/vines-eerie-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._restrained.changes],
    });
  }

  get _bless() {
    return new Effect({
      name: '祝福術',
      description: 'Add 1d4 to all saving throws and attack rolls for 1 minute',
      icon: 'systems/dnd5e/icons/spells/haste-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.bonuses.msak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.bonuses.rsak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'bloom',
        },
      ],
    });
  }

  get _blindnessDeafness() {
    return new Effect({
      name: '目盲/耳聾術',
      description: 'Choose between blindness or deafness',
      icon: 'systems/dnd5e/icons/spells/evil-eye-red-2.jpg',
      nestedEffects: [
        this._blindnessDeafnessBlindness,
        this._blindnessDeafnessDeafness,
      ],
    });
  }

  get _blindnessDeafnessBlindness() {
    return new Effect({
      name: '目盲',
      description:
        'Disadvantage on attack rolls while granting advantage to all who attack for 1 minute',
      icon: 'systems/dnd5e/icons/spells/evil-eye-red-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._blinded.changes],
    });
  }

  get _blindnessDeafnessDeafness() {
    return new Effect({
      name: '耳聾',
      description: 'No active effects and lasts for 1 minute',
      icon: 'systems/dnd5e/icons/spells/evil-eye-red-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._deafened.changes],
    });
  }

  get _blur() {
    return new Effect({
      name: '朦朧術',
      description: 'Grants disadvantage to all who attack for 1 minute',
      icon: 'systems/dnd5e/icons/spells/air-burst-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'blur',
        },
      ],
    });
  }

  get _causeFear() {
    return new Effect({
      name: '造成恐懼',
      description: 'Fear lasts for 1 minute',
      icon: 'icons/magic/death/skeleton-worn-skull-tan.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._frightened.changes],
    });
  }

  get _charmPerson() {
    return new Effect({
      name: '魅惑人類',
      description: 'No active effects and lasts for 1 hour',
      icon: 'systems/dnd5e/icons/spells/explosion-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [...this._charmed.changes],
    });
  }

  get _command() {
    return new Effect({
      name: '命令術',
      description: 'No active effects and lasts until the end of next turn',
      icon: 'systems/dnd5e/icons/spells/explosion-magenta-1.jpg',
      seconds: CONFIG.time.roundTime,
      turns: 1,
    });
  }

  get _comprehendLanguages() {
    return new Effect({
      name: '通曉語言',
      description: 'Adds all languages for 1 hour',
      icon: 'systems/dnd5e/icons/spells/runes-royal-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.languages.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagion() {
    return new Effect({
      name: '疫病術',
      description:
        'Choose between blinding sickness, filth fever, flesh rot, mindfire, seizure, or slimy doom',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      nestedEffects: [
        this._contagionBlindingSickness,
        this._contagionFilthFever,
        this._contagionFleshRot,
        this._contagionMindfire,
        this._contagionSeizure,
        this._contagionSlimyDoom,
      ],
    });
  }

  get _contagionBlindingSickness() {
    return new Effect({
      name: '失明症',
      description:
        'Disadvantage on wisdom checks and wisdom saving throws for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        ...this._blinded.changes,
      ],
    });
  }

  get _contagionFilthFever() {
    return new Effect({
      name: '穢熱病',
      description:
        'Disadvantage on strength checks strength saving throws, and attacks that use strength for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionFleshRot() {
    return new Effect({
      name: '血肉潰爛',
      description:
        'Disadvantage on charisma checks and vulnerability to all damage',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.check.cha',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.traits.dv.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionMindfire() {
    return new Effect({
      name: '腦熱症',
      description:
        'Disadvantage on intelligence checks and intelligence saving throws for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.int',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.int',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionSeizure() {
    return new Effect({
      name: '癲癇',
      description:
        'Disadvantage on dexterity checks, dexterity saving throws, and attacks that use dexterity for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionSlimyDoom() {
    return new Effect({
      name: '黏濘惡疾',
      description:
        'Disadvantage on constitution checks and constitution saving throws for 7 days',
      icon: 'systems/dnd5e/icons/spells/rip-magenta-3.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.ability.save.con',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.con',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _darkvision() {
    return new Effect({
      name: '黑暗視覺',
      description: 'Upgrade darkvision to 60 ft. for 8 hours',
      icon: 'systems/dnd5e/icons/spells/evil-eye-red-1.jpg',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: 'data.attributes.senses.darkvision',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 5,
        },
      ],
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimSight'),
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 5,
        },
      ],
    });
  }

  get _disguiseSelf() {
    return new Effect({
      name: '易容術',
      description: 'No active effects and lasts for 1 hour',
      icon: 'systems/dnd5e/icons/spells/wind-grasp-eerie-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _divineFavor() {
    return new Effect({
      name: '神恩術',
      description: 'Add 1d4 radiant damage to weapon attacks for 1 minute',
      icon: 'systems/dnd5e/icons/spells/enchant-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.weapon.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4[radiant]',
        },
      ],
    });
  }

  get _divineWord() {
    return new Effect({
      name: '聖言術',
      description: 'Adds various effects based on the remaining hit points',
      icon: 'systems/dnd5e/icons/spells/light-royal-3.jpg',
      isDynamic: true,
      flags: {
        requiresActorUpdate: true,
      },
    });
  }

  get _daylight() {
    return new Effect({
      name: '晝明術',
      description: 'Emits 60/120 light for 1 hour (requires ATL)',
      icon: 'systems/dnd5e/icons/spells/light-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '120',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '60',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.35,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "pulse", "speed": 3,"intensity": 1}',
        },
      ],
    });
  }

  get _enhanceAbility() {
    return new Effect({
      name: '強化屬性',
      description:
        "Choose between Bear's Endurance, Bull's Strength, Cat's Grace, Eagle's Splendor, Fox's Cunning, or Owl's Wisdom",
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      nestedEffects: [
        this._enhanceAbilityBearsEndurance,
        this._enhanceAbilityBullsStrength,
        this._enhanceAbilityCatsGrace,
        this._enhanceAbilityEaglesSplendor,
        this._enhanceAbilityFoxsCunning,
        this._enhanceAbilityOwlsWisdom,
      ],
    });
  }

  get _enhanceAbilityBearsEndurance() {
    return new Effect({
      name: "熊之堅韌",
      description:
        'Advantage on constitution checks and 2d6 temp hit points (rolled automatically) for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      flags: {
        requiresActorUpdate: true,
      },
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.con',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityBullsStrength() {
    return new Effect({
      name: "牛之力量",
      description:
        'Advantage on strength checks and double maximum carrying capacity for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.encumbrance.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '2',
          priority: 5,
        },
      ],
    });
  }

  get _enhanceAbilityCatsGrace() {
    return new Effect({
      name: "貓之優雅",
      description: 'Advantage on dexterity checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityEaglesSplendor() {
    return new Effect({
      name: "鷹之威儀",
      description: 'Advantage on charisma checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.cha',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityFoxsCunning() {
    return new Effect({
      name: "狐之狡黠",
      description: 'Advantage on intelligence checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.int',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityOwlsWisdom() {
    return new Effect({
      name: "梟之睿智",
      description: 'Advantage on wisdom checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enlargeReduce() {
    return new Effect({
      name: '變巨/縮小術',
      description: 'Choose between Enlarge or Reduce',
      icon: 'systems/dnd5e/icons/spells/link-blue-2.jpg',
      nestedEffects: [this._enlargeReduceEnlarge, this._enlargeReduceReduce],
    });
  }

  get _enlargeReduceEnlarge() {
    return new Effect({
      name: '變巨',
      description:
        'Add 1d4 to damage and advantage on strength checks and strength saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/link-blue-2.jpg',
      isDynamic: true,
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.weapon.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'flags.midi-qol.advantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enlargeReduceReduce() {
    return new Effect({
      name: '縮小',
      description:
        'Subtract 1d4 from damage and disadvantage on strength checks and strength saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/link-blue-2.jpg',
      isDynamic: true,
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.weapon.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _faerieFire() {
    return new Effect({
      name: '妖火術',
      description: 'Grants advantage to all who attack for 1 minute',
      icon: 'systems/dnd5e/icons/spells/fire-arrows-jade-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "pulse","speed": 1,"intensity": 1}',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'glow',
        },
      ],
    });
  }

  get _falseLife() {
    return new Effect({
      name: '摹造生命',
      description:
        'Add 1d4 + 4 temp hit points (rolled automatically) for 1 hour',
      icon: 'systems/dnd5e/icons/spells/heal-royal-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      flags: {
        requiresActorUpdate: true,
      },
    });
  }

  get _featherFall() {
    return new Effect({
      name: '羽落術',
      description: 'No active effects and lasts for 1 minute',
      icon: 'systems/dnd5e/icons/spells/wind-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _feeblemind() {
    return new Effect({
      name: '弱智術',
      description: 'Set intelligence and charisma scores to 1 until removed',
      icon: 'systems/dnd5e/icons/spells/light-eerie-3.jpg',
      changes: [
        {
          key: 'data.abilities.int.value',
          mode: CONST.ACTIVE_EFFECT_MODES.DOWNGRADE,
          value: '1',
          priority: 25,
        },
        {
          key: 'data.abilities.cha.value',
          mode: CONST.ACTIVE_EFFECT_MODES.DOWNGRADE,
          value: '1',
          priority: 25,
        },
      ],
    });
  }

  get _fireShield() {
    return new Effect({
      name: '火焰護盾',
      description: 'Choose between cold or fire resistance',
      icon: 'systems/dnd5e/icons/spells/protect-red-3.jpg',
      nestedEffects: [
        this._fireShieldColdResistance,
        this._fireShieldFireResistance,
      ],
    });
  }

  get _fireShieldColdResistance() {
    return new Effect({
      name: '火焰護盾 (寒冰抗性)',
      description: 'Add damage resistance to cold for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/protect-red-3.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'cold',
        },
      ],
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch", "speed": 3, "intensity": 1}',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'fire',
        },
      ],
    });
  }

  get _fireShieldFireResistance() {
    return new Effect({
      name: '火焰護盾 (火焰抗性)',
      description: 'Add damage resistance to fire for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/protect-red-3.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'fire',
        },
      ],
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.COLD_FIRE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch", "speed": 3, "intensity": 1}',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Fire v2 (coldfire)',
        },
      ],
    });
  }

  get _findThePath() {
    return new Effect({
      name: '尋找捷徑',
      description: 'No active effects and lasts for 1 day',
      icon: 'systems/dnd5e/icons/spells/light-jade-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_DAY,
    });
  }

  get _fly() {
    return new Effect({
      name: '飛行術',
      description: 'Upgrade flying speed to 60 ft. for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/link-spirit-1.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'data.attributes.movement.fly',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 25,
        },
      ],
    });
  }

  get _foresight() {
    return new Effect({
      name: '預視術',
      description:
        'Grants advantage on attack rolls, ability checks, and saving throws while granting disadvantage to all who attack for 8 hours',
      icon: 'systems/dnd5e/icons/spells/evil-eye-eerie-3.jpg',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeAdv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _freedomOfMovement() {
    return new Effect({
      name: '行動自如術',
      description: 'No active effects and lasts for 1 hour',
      icon: 'systems/dnd5e/icons/spells/slice-spirit-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _frostbite() {
    return new Effect({
      name: '霜噬',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/magic/water/snowflake-ice-snow-white.webp',
      seconds: CONFIG.time.roundTime,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['1Attack:mwak','1Attack:rwak'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.rwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _globeOfInvulnerability() {
    return new Effect({
      name: '法術無效結界',
      description: 'No active effects and lasts for 1 minute',
      icon: 'systems/dnd5e/icons/spells/protect-blue-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'warp-field',
        },
      ],
    });
  }

  get _gaseousForm() {
    return new Effect({
      name: '氣化形體',
      description: 'Transform into a misty for 1 hour',
      icon: 'icons/magic/air/wind-swirl-gray-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
        {
          key: 'data.attributes.movement.fly',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
          priority: 50,
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'physical',
        },
        {
          key: 'flags.midi-qol.advantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.check.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.check.con',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Fairy Outline',
        },
      ],
    });
  }

  get _greaterInvisibility() {
    return new Effect({
      name: '高等隱形術',
      description:
        'Grants advantage on attack rolls while forcing disadvantage to all who attack for 1 minute',
      icon: 'systems/dnd5e/icons/spells/fog-water-air-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'smoke',
        },
      ],
    });
  }

  get _guidance() {
    return new Effect({
      name: '指導術',
      description: 'Adds 1d4 to one ability or skill check for 1 minute',
      icon: 'systems/dnd5e/icons/spells/haste-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.optional.guidance.label',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Guidance',
        },
        {
          key: 'flags.midi-qol.optional.guidance.check.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '+1d4',
        },
        {
          key: 'flags.midi-qol.optional.guidance.skill.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '+1d4',
        },
      ],
    });
  }

  get _guidingBolt() {
    return new Effect({
      name: '光導箭',
      description:
        'Grants advantage to next attacker or until the end of next turn',
      icon: 'systems/dnd5e/icons/spells/fireball-sky-2.jpg',
      seconds: CONFIG.time.roundTime,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['isAttacked'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _haste() {
    return new Effect({
      name: '加速術',
      description:
        'Double speed, add 2 to AC, and advantage on dexterity saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/haste-royal-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*2',
          priority: 25,
        },
      ],
    });
  }

  get _heroesFeast() {
    return new Effect({
      name: "英雄宴",
      description:
        'Immunity to poison and frightened, make all wisdom saving throws with advantage, and hit point maximum increases by 2d10 for 24 hours',
      icon: 'systems/dnd5e/icons/spells/heal-royal-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_DAY,
      flags: {
        requiresActorUpdate: true,
      },
      changes: [
        {
          key: 'data.traits.di.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'poison',
        },
        {
          key: 'data.traits.ci.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'frightened',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.wis',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _heroism() {
    return new Effect({
      name: '英雄氣概',
      description: 'Immunity to frightened for 1 minute',
      icon: 'systems/dnd5e/icons/spells/heal-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.traits.ci.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'frightened',
        },
      ],
    });
  }

  get _hideousLaughter() {
    return new Effect({
      name: '塔莎狂笑術',
      description:
        'Apply the effects of the prone and incapacitated conditions for 1 minute',
      icon: 'systems/dnd5e/icons/spells/explosion-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._incapacitated.changes, ...this._prone.changes],
    });
  }

  get _holdMonster() {
    return new Effect({
      name: '怪物定身術',
      description: 'Apply the effects of the paralyzed condition for 1 minute',
      icon: 'systems/dnd5e/icons/spells/shielding-fire-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._paralyzed.changes],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'mantle-of-madness',
        },
      ],
    });
  }

  // TODO: potentially use overtime here if find a good way to do it
  // flags.midi-qol.OverTime
  // turn=end,
  // saveAbility=wis,
  // saveDC=30,
  // label=Hold Person
  get _holdPerson() {
    return new Effect({
      name: '人類定身術',
      description: 'Apply the effects of the paralyzed condition for 1 minute',
      icon: 'systems/dnd5e/icons/spells/shielding-eerie-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._paralyzed.changes],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'mantle-of-madness',
        },
      ],
    });
  }

  get _holyAura() {
    return new Effect({
      name: '神聖靈光',
      description:
        'Advantage on saving throws, grant disadvantage to all who attack, and emit dim light in 5 radius (requires ATL) for 1 minute',
      icon: 'systems/dnd5e/icons/spells/haste-sky-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "sunburst", "speed": 2,"intensity": 4}',
        },
      ],
    });
  }

  get _huntersMark() {
    return new Effect({
      name: "獵人印記",
      description: 'No active effects and lasts until removed (for now)',
      icon: 'systems/dnd5e/icons/spells/evil-eye-red-1.jpg',
    });
  }

  get _hex() {
    return new Effect({
      name: "脆弱詛咒",
      description: 'No active effects and lasts until removed (for now)',
      icon: 'systems/dnd5e/icons/skills/violet_20.jpg',
    });
  }

  get _hypnoticPattern() {
    return new Effect({
      name: "催眠圖紋",
      description: 'Becomes charmed, incapacitated, and has a speed of 0.',
      icon: 'icons/magic/control/fear-fright-white.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      flags: {
        dae: {
          specialDuration: ['isDamaged'],
        },
      },
      changes: [...this._incapacitated.changes, ...this._charmed.changes,
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
      ],
    });
  }

  get _invisibility() {
    return new Effect({
      name: '隱形術',
      description:
        'Grants advantage on next attack roll while forcing disadvantage to all who attack for 1 hour. Expires after 1 attack.',
      icon: 'systems/dnd5e/icons/spells/fog-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      flags: {
        dae: {
          specialDuration: ['1Attack', '1Spell'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'smoke',
        },
      ],
    });
  }

  get _irresistibleDance() {
    return new Effect({
      name: '奧圖狂舞術',
      description:
        'Zero movement, disadvantage on dexterity saving throws, disadvantage on attack rolls, and grants advantage to all who attack for 1 minute',
      icon: 'systems/dnd5e/icons/spells/link-blue-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _jump() {
    return new Effect({
      name: '跳躍術',
      description: 'No active effects and lasts for 1 minute',
      icon: 'systems/dnd5e/icons/spells/wind-grasp-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _light() {
    return new Effect({
      name: '光亮術',
      description: 'Emits 20/40 light for 1 hour (requires ATL)',
      icon: 'systems/dnd5e/icons/spells/light-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '40',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "pulse", "speed": 3,"intensity": 1}',
        },
      ],
    });
  }

  get _longstrider() {
    return new Effect({
      name: '大步奔行',
      description: 'Increase all movement by 10 ft. for 1 hour',
      icon: 'systems/dnd5e/icons/spells/wind-sky-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '+10',
        },
      ],
    });
  }

  get _mageArmor() {
    return new Effect({
      name: '法師護甲',
      description: 'Upgrades armor to 13 + dex modifier for 8 hours',
      icon: 'systems/dnd5e/icons/spells/protect-blue-1.jpg',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: 'data.attributes.ac.calc',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'mage',
          priority: 5,
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'mantle-of-madness',
        },
      ],
    });
  }

  get _mindBlank() {
    return new Effect({
      name: '心靈屏障',
      description: 'Adds immunity to psychic damage for 24 hours',
      icon: 'systems/dnd5e/icons/spells/air-burst-sky-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_DAY,
      changes: [
        {
          key: 'data.traits.di.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'psychic',
        },
        {
          key: 'data.traits.ci.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'charmed',
        },
      ],
    });
  }

  get _mirrorImage() {
    return new Effect({
      name: 'Mirror Image',
      description: 'No active effects and lasts for 1 minute',
      icon: 'systems/dnd5e/icons/spells/wind-grasp-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'images',
        },
      ],
    });
  }

  get _passWithoutTrace() {
    // TODO token magic effects
    return new Effect({
      name: '行蹤無跡',
      description: 'Add 10 to stealth checks for 1 hour',
      icon: 'systems/dnd5e/icons/spells/fog-air-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.skills.ste.bonuses.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }

  get _protectionFromEnergy() {
    return new Effect({
      name: '防護能量',
      description:
        'Choose between acid, cold, fire, lightning, or thunder resistance',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      nestedEffects: [
        this._protectionFromEnergyAcid,
        this._protectionFromEnergyCold,
        this._protectionFromEnergyFire,
        this._protectionFromEnergyLightning,
        this._protectionFromEnergyThunder,
      ],
    });
  }

  get _protectionFromEnergyAcid() {
    // TODO token magic effects
    return new Effect({
      name: '防護酸蝕',
      description: 'Adds damage resistance to acid for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'acid',
        },
      ],
    });
  }

  get _protectionFromEnergyCold() {
    // TODO token magic effects
    return new Effect({
      name: '防護寒冷',
      description: 'Adds damage resistance to cold for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'cold',
        },
      ],
    });
  }

  get _protectionFromEnergyFire() {
    // TODO token magic effects
    return new Effect({
      name: '防護火焰',
      description: 'Adds damage resistance to fire for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'fire',
        },
      ],
    });
  }

  get _protectionFromEnergyLightning() {
    // TODO token magic effects
    return new Effect({
      name: '防護閃電',
      description: 'Adds damage resistance to lightning for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'lightning',
        },
      ],
    });
  }

  get _protectionFromEnergyThunder() {
    // TODO token magic effects
    return new Effect({
      name: '防護雷鳴',
      description: 'Adds damage resistance to thunder for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-jade-2.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'thunder',
        },
      ],
    });
  }

  get _protectionFromPoison() {
    // TODO token magic effects
    return new Effect({
      name: '防護毒素',
      description:
        'Adds resistance to poison for 1 hour (does not grant automatic advantage on saving throws against poison)',
      icon: 'systems/dnd5e/icons/spells/protect-acid-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'poison',
        },
      ],
    });
  }

  get _protectionFromEvilAndGood() {
    return new Effect({
      name: '防護善惡',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/protect-sky-2.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _rayOfFrost() {
    return new Effect({
      name: '冷凍射線',
      description: 'Lowers movement by 10 ft',
      icon: 'systems/dnd5e/icons/spells/beam-blue-1.jpg',
      seconds: CONFIG.time.roundTime,
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '-10',
          priority: 5,
        },
      ],
    });
  }

  get _regenerate() {
    return new Effect({
      name: '再生術',
      description: 'Regain 1 hit point at the start of each turn for 1 hour',
      icon: 'systems/dnd5e/icons/spells/heal-jade-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'flags.midi-qol.OverTime.regenerate',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value:
            'label=Regenerate,turn=start,damageRoll=1,damageType=healing,condition=@attributes.hp.value > 0 && @attributes.hp.value < @attributes.hp.max',
        },
      ],
    });
  }

  get _resilientSphere() {
    return new Effect({
      name: '歐提路克魔封法球',
      description: 'Adds total immunity to all damage and half movement',
      icon: 'systems/dnd5e/icons/spells/light-magenta-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 5,
        },
        {
          key: 'data.traits.di.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _resistance() {
    return new Effect({
      name: '提升抗力',
      description: 'Add 1d4 to a single saving throw in the next minute',
      icon: 'systems/dnd5e/icons/spells/protect-royal-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.optional.resistance.label',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Resistance',
        },
        {
          key: 'flags.midi-qol.optional.resistance.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '+1d4',
        },
      ],
    });
  }
 
  get _rimeBindingIce() {
    return new Effect({
      name: '萊姆冰封術',
      description: 'Speed down to 0 in the next minute or until one break the frost',
      icon: 'systems/dnd5e/icons/spells/ice-sky-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Super-Frost',
        },
      ],
    });
  }

  get _sanctuary() {
    return new Effect({
      name: '聖域術',
      description: 'Can not be attack in the next minute or until harm to someone',
      icon: 'icons/magic/holy/barrier-shield-winged-cross.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      flags: {
        dae: {
          specialDuration: ['DamageDealt','1Attack'],
        },
      },
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'fumes',
        },
      ],
    });
  }

  get _shield() {
    return new Effect({
      name: '護盾術',
      description: 'Add 5 to AC until next turn',
      icon: 'systems/dnd5e/icons/spells/protect-magenta-1.jpg',
      seconds: CONFIG.time.roundTime,
      flags: {
        dae: {
          specialDuration: ['turnStart'],
        },
      },
      changes: [
        {
          key: 'data.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'water-field',
        },
      ],
    });
  }

  get _shieldOfFaith() {
    return new Effect({
      name: '虔誠護盾',
      description: 'Adds 2 to the AC for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/protect-sky-2.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'data.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'bloom',
        },
      ],
    });
  }

  get _slow() {
    return new Effect({
      name: '緩速術',
      description:
        'Halves movement and and subtract 2 from AC and dexterity saving throws for 1 minute',
      icon: 'systems/dnd5e/icons/spells/fog-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-2',
        },
        {
          key: 'data.abilities.dex.bonuses.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-2',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 5,
        },
      ],
    });
  }

  get _speakWithAnimals() {
    return new Effect({
      name: '動物交談術',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/wild-jade-1.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _speakWithDead() {
    return new Effect({
      name: '死者交談術',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/horror-acid-1.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _speakWithPlants() {
    return new Effect({
      name: '植物交談術',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/leaf-jade-1.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _spiderClimb() {
    return new Effect({
      name: '蛛行術',
      description: 'Grants climbing speed equal to walking speed for 1 hour',
      icon: 'systems/dnd5e/icons/spells/shielding-spirit-1.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.attributes.movement.climb',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '@attributes.movement.walk',
          priority: 5,
        },
      ],
    });
  }

  get _spiritGuardians() {
    return new Effect({
      name: '靈體守衛',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/needles-sky-2.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {          
          key: 'flags.midi-qol.OverTime',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'turn=start, saveAbility=wis, saveDC=@attributes.spelldc, saveDamage=halfdamage, rollType=save, saveMagic=true, damageBeforeSave=false, damageRoll=3d8, damageType=radiant',
          priority: '0'
	},
        {          
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0.5',
          priority: '20'
        },
      ],
      flags: {
        "ActiveAuras": {
          "isAura": true,
          "aura": "Enemy",
          "radius": 30,
          "alignment": "",
          "type": "",
          "ignoreSelf": true,
          "height": true,
          "hidden": true,
          "displayTemp": true,
          "hostile": false,
          "onlyOnce": false
        }
      },
    });
  }

  get _spiritualWeapon() {
    return new Effect({
      name: 'Spiritual Weapon',
      description: 'No active effects and lasts for 1 minute',
      icon: 'systems/dnd5e/icons/spells/enchant-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _stoneskin() {
    // TODO token magic effects
    return new Effect({
      name: '石膚術',
      description: 'Adds resistance to non-magical physical damage for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-orange-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'physical',
        },
      ],
    });
  }

  get _suggestion() {
    return new Effect({
      name: '暗示術',
      description: 'No active effects and lasts for 8 hours',
      icon: 'systems/dnd5e/icons/spells/air-burst-magenta-2.jpg',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
    });
  }

  get _telekinesis() {
    return new Effect({
      name: '心靈遙控',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'systems/dnd5e/icons/spells/wind-grasp-air-3.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _trueStrike() {
    return new Effect({
      name: '克敵機先',
      description:
        'Grants advantage on next attack or until the end of next turn',
      icon: 'systems/dnd5e/icons/spells/enchant-sky-1.jpg',
      seconds: CONFIG.time.roundTime,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['1Attack'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _viciousMockery() {
    return new Effect({
      name: '惡毒嘲笑',
      description:
        'Grants disadvantage on next attack or until the end of next turn',
      icon: 'icons/skills/toxins/cup-goblet-poisoned-spilled.webp',
      seconds: CONFIG.time.roundTime,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['1Attack'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _wardingBond() {
    return new Effect({
      name: '守護聯結',
      description:
        'Adds 1 to AC and saving throws and grants resistance to all damage for 1 hour',
      icon: 'systems/dnd5e/icons/spells/protect-sky-2.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'data.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1',
        },
        {
          key: 'data.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1',
        },
        {
          key: 'data.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'physical',
        },
        {
          key: 'data.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'magical',
        },
      ],
    });
  }

  get _waterBreathing() {
    return new Effect({
      name: '水下呼吸',
      description: 'No active effects and lasts for 24 hours',
      icon: 'icons/magic/water/pseudopod-swirl-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_DAY,
    });
  }

  get _waterWalk() {
    return new Effect({
      name: '水面行走',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/creatures/slimes/slime-movement-swirling-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  /** Class specific */
  get _bardicInspiration() {
    return new Effect({
      name: '吟遊激勵',
      description:
        'Add a dice to a single ability check, attack roll, or saving throw in the next 10 minutes',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      nestedEffects: [
        this._bardicInspirationD6,
        this._bardicInspirationD8,
        this._bardicInspirationD10,
        this._bardicInspirationD12,
      ],
    });
  }

  get _bardicInspirationD6() {
    return new Effect({
      name: '吟遊激勵 (d6)',
      description: 'For bards from level 1 to level 4',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.label',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'Bardic Inspiration',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d6',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d6',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.skill.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d6',
        },
      ],
    });
  }

  get _bardicInspirationD8() {
    return new Effect({
      name: '吟遊激勵 (d8)',
      description: 'For bards from level 5 to level 9',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.label',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'Bardic Inspiration',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d8',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d8',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.skill.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d8',
        },
      ],
    });
  }

  get _bardicInspirationD10() {
    return new Effect({
      name: '吟遊激勵 (d10)',
      description: 'For bards from level 10 to level 14',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.label',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'Bardic Inspiration',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d10',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d10',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.skill.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d10',
        },
      ],
    });
  }

  get _bardicInspirationD12() {
    return new Effect({
      name: '吟遊激勵 (d12)',
      description: 'For bards from level 15 to level 20',
      icon: 'systems/dnd5e/icons/skills/yellow_08.jpg',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.label',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'Bardic Inspiration',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d12',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.save.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d12',
        },
        {
          key: 'flags.midi-qol.optional.bardic-inspiration.skill.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d12',
        },
      ],
    });
  }

  get _channelDivinitySacredWeapon() {
    return new Effect({
      name: '引導神力:至聖武器',
      description:
        'Add charisma modifier (minimum +1) to all weapon attack rolls and emits 20/40 light for 1 minute (requires ATL)',
      icon: 'systems/dnd5e/icons/skills/light_05.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+max(1, @abilities.cha.mod)',
        },
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+max(1, @abilities.cha.mod)',
        },
      ],
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '40',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "sunburst", "speed": 2,"intensity": 4}',
        },
      ],
    });
  }

  get _channelDivinityTurnTheUnholy() {
    return new Effect({
      name: '引導神力:驅散不潔者',
      description:
        'No active effects and lasts for 1 minute. Expires on taking damage.',
      icon: 'icons/magic/fire/explosion-embers-evade-silhouette.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      flags: {
        dae: {
          specialDuration: ['isDamaged'],
        },
      },
    });
  }

  get _channelDivinityTurnUndead() {
    return new Effect({
      name: '引導神力:驅散不死',
      description:
        'No active effects and lasts for 1 minute. Expires on taking damage.',
      icon: 'systems/dnd5e/icons/skills/yellow_19.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      flags: {
        dae: {
          specialDuration: ['isDamaged'],
        },
      },
    });
  }

  get _eyesofNight() {
    return new Effect({
      name: '黑夜明目',
      description: 'Upgrade darkvision to 300 ft. for 1 hours',
      icon: 'systems/dnd5e/icons/spells/evil-eye-eerie-3.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOURS,
      changes: [
        {
          key: 'data.attributes.senses.darkvision',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '300',
          priority: 5,
        },
      ],
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimSight'),
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '300',
          priority: 5,
        },
      ],
    });
  }

  get _kiEmptyBody() {
    return new Effect({
      name: '空靈體',
      description:
        'Grants advantage on attack rolls, forces disadvantage to all who attack, and grants resistance to all damage except force for 1 minute',
      icon: 'icons/magic/perception/silhouette-stealth-shadow.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'physical',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'bludgeoning',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'piercing',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'slashing',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'silver',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'adamant',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'acid',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'cold',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'fire',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'lightning',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'necrotic',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'poison',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'psychic',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'radiant',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'thunder',
        },
      ],
    });
  }

  get _kiPatientDefense() {
    return new Effect({
      name: '氣:堅強防禦',
      description:
        'Grants disadvantage to all who attack and advantage on all dexterity saving throws until next turn',
      icon: 'icons/magic/defensive/shield-barrier-glowing-blue.webp',
      flags: {
        dae: {
          specialDuration: ['turnStart'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _stunningStrike() {
    return new Effect({
      name: '震懾拳',
      description:
        'Interfere with the flow of ki in an opponent, the target be stunned until the end of your next turn',
      icon: 'systems/dnd5e/icons/skills/fire_07.jpg',
      changes: [...this._stunned.changes],
      flags: {
        dae: {
          specialDuration: ['turnEndSource'],
        },
      },
    });
  }

  get _steadyAim() {
    return new Effect({
      name: '手穩就准',
      description:
        'Advantage on next attack roll on the current turn, speed is 0 until the end of the current turn',
      icon: 'icons/skills/ranged/archery-bow-attack-yellow.webp',
      seconds: CONFIG.time.roundTime,
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
        },
      ],
      flags: {
        dae: {
          specialDuration: ['1Attack','isMoved'],
        },
      },
    });
  }

  get _rage() {
    return new Effect({
      name: '狂暴',
      description:
        'Advantage on strength checks and strength saving throws, a variable bonus to melee damage based on barbarian level, and resistance to piercing, bludgeoning, and slashing damage for 1 minute. Also handles Path of the Totem Warrior resistances.',
      icon: 'systems/dnd5e/icons/skills/red_10.jpg',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      isDynamic: true,
      changes: [
        {
          key: 'flags.midi-qol.advantage.ability.check.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'slashing',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'piercing',
        },
        {
          key: 'data.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'bludgeoning',
        },
      ],
    });
  }

  get _twilightSanctuary() {
    return new Effect({
      name: '暮光聖域',
      description:
        'You grant 30-foot radius temporary hit points equal to 1d6 + cleric level or end one charmed or frightened effect for 1 minute.',
      icon: 'icons/magic/life/heart-area-circle-red-green.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      isDynamic: true,
      changes: [
        {          
          key: 'flags.midi-qol.OverTime',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: 'turn=end,damageRoll=1d6+@classes.cleric.levels,damageType=temphp,label=暮光聖域',
        },
      ],
      flags: {
        dae: {
          specialDuration: ['zeroHP'],
        },
        "ActiveAuras": {
          "isAura": true,
          "aura": "Allies",
          "radius": 30,
          "alignment": "",
          "type": "",
          "ignoreSelf": false,
          "height": true,
          "hidden": true,
          "displayTemp": true,
          "hostile": false,
          "onlyOnce": false
        }
      },
    });
  }

  get _recklessAttack() {
    return new Effect({
      name: '魯莽攻擊',
      description:
        'Advantage on melee attacks and grants advantage to those who attack for 1 turn',
      icon: 'systems/dnd5e/icons/skills/weapon_34.jpg',
      seconds: CONFIG.time.roundTime,
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  /* Equipment effects */
  get _bullseyeLantern() {
    return new Effect({
      name: '牛眼提燈',
      description:
        'Adds lantern light in a 60 degree cone for 6 hours (requires ATL)',
      icon: 'systems/dnd5e/icons/items/inventory/lantern.jpg',
      seconds: Constants.SECONDS.IN_SIX_HOURS,
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.lightAngle'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '60',
        },
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '60',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '30',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.4,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  get _candle() {
    return new Effect({
      name: '蠟燭',
      description: 'Adds candle light for 1 hour (requires ATL)',
      icon: 'systems/dnd5e/icons/items/inventory/candle.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.2,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  get _hoodedLantern() {
    return new Effect({
      name: '提燈 (附蓋)',
      description: 'Adds hooded lantern light for 6 hours (requires ATL)',
      icon: 'systems/dnd5e/icons/items/inventory/lantern.jpg',
      seconds: Constants.SECONDS.IN_SIX_HOURS,
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '0',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.4,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  get _lantern() {
    return new Effect({
      name: '提燈',
      description: 'Adds lantern light for 6 hours (requires ATL)',
      icon: 'systems/dnd5e/icons/items/inventory/lantern.jpg',
      seconds: Constants.SECONDS.IN_SIX_HOURS,
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '60',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '30',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.4,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  get _torch() {
    return new Effect({
      name: '火炬',
      description: 'Adds torch light for 1 hour (requires ATL)',
      icon: 'systems/dnd5e/icons/items/inventory/torch.jpg',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: this._createAtlEffectKey('ATL.dimLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '40',
        },
        {
          key: this._createAtlEffectKey('ATL.brightLight'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: this._createAtlEffectKey('ATL.lightColor'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAlpha'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.4,
        },
        {
          key: this._createAtlEffectKey('ATL.lightAnimation'),
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  /* Other effects */
  get _bonusAction() {
    return new Effect({
      name: '附贈動作',
      description: 'No active effects and expires on turn start',
      icon: 'modules/dfreds-convenient-effects/images/bonus-action.svg',
      flags: {
        dae: {
          specialDuration: ['turnStart', 'shortRest', 'longRest'],
        },
      },
    });
  }

  get _coverHalf() {
    return new Effect({
      name: '半掩蔽',
      description: 'Adds 2 to AC and dexterity saving throws',
      icon: 'modules/dfreds-convenient-effects/images/broken-wall.svg',
      changes: [
        {
          key: 'data.attributes.ac.cover',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
        {
          key: 'data.abilities.dex.bonuses.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
      ],
    });
  }

  get _coverThreeQuarters() {
    return new Effect({
      name: '四分之三掩蔽',
      description: 'Adds 5 to AC and dexterity saving throws',
      icon: 'modules/dfreds-convenient-effects/images/brick-wall.svg',
      changes: [
        {
          key: 'data.attributes.ac.cover',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
        },
        {
          key: 'data.abilities.dex.bonuses.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
        },
      ],
    });
  }

  get _encumbered() {
    return new Effect({
      name: 'Encumbered',
      description: 'Lowers movement by 10 ft.',
      icon: 'icons/svg/down.svg',
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '-10',
          priority: 5,
        },
      ],
    });
  }

  get _dodge() {
    return new Effect({
      name: '迴避',
      description:
        'Grants disadvantage to all who attack and advantage on all dexterity saving throws until next turn',
      icon: 'modules/dfreds-convenient-effects/images/dodging.svg',
      flags: {
        dae: {
          specialDuration: ['turnStart'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.grants.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _flanked() {
    return new Effect({
      name: 'Flanked',
      description: 'Grants advantage to all who melee attack',
      icon: 'modules/dfreds-convenient-effects/images/encirclement.svg',
      changes: [
        {
          key: 'flags.midi-qol.grants.advantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.grants.advantage.attack.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _flanking() {
    return new Effect({
      name: 'Flanking',
      description: 'Grants advantage on melee attack rolls',
      icon: 'icons/svg/sword.svg',
      changes: [
        {
          key: 'flags.midi-qol.advantage.attack.mwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.advantage.attack.msak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _greatWeaponMaster() {
    return new Effect({
      name: '巨武大師',
      description: 'Subtracts 5 from melee attacks but adds 10 to melee damage',
      icon: 'systems/dnd5e/icons/skills/red_05.jpg',
      changes: [
        {
          key: 'data.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-5',
        },
        {
          key: 'data.bonuses.mwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }

  get _heavilyEncumbered() {
    return new Effect({
      name: '重載',
      description:
        'Lowers movement by 20 ft., disadvantage on all attack rolls, and disadvantage on strength, dexterity, and constitution saves',
      icon: 'icons/svg/downgrade.svg',
      changes: [
        {
          key: 'data.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '-20',
          priority: 5,
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.str',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.dex',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.ability.save.con',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _inspiration() {
    return new Effect({
      name: '激勵骰',
      description:
        'Advantage on everything and expires after any action, save, check, or skill roll',
      icon: 'icons/magic/control/buff-luck-fortune-green.webp',
      flags: {
        dae: {
          specialDuration: ['1Action', 'isSave', 'isCheck', 'isSkill'],
        },
      },
      changes: [
        {
          key: 'flags.midi-qol.advantage.all',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '1',
        },
      ],
    });
  }

  get _rangedDisadvantage() {
    return new Effect({
      name: 'Ranged Disadvantage',
      description: 'Disadvantage on ranged attack rolls',
      icon: 'modules/dfreds-convenient-effects/images/broken-arrow.svg',
      changes: [
        {
          key: 'flags.midi-qol.disadvantage.attack.rwak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.midi-qol.disadvantage.attack.rsak',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _reaction() {
    return new Effect({
      name: '反應',
      description: 'No active effects and expires on turn start',
      icon: 'modules/dfreds-convenient-effects/images/reaction.svg',
      flags: {
        dae: {
          specialDuration: ['turnStart', 'shortRest', 'longRest'],
        },
      },
    });
  }

  get _ready() {
    return new Effect({
      name: '準備',
      description: 'No active effects and expires on turn start',
      icon: 'modules/dfreds-convenient-effects/images/ready.svg',
      flags: {
        dae: {
          specialDuration: ['turnStart'],
        },
      },
    });
  }

  get _sharpshooter() {
    return new Effect({
      name: '神射手',
      description:
        'Subtracts 5 from ranged attacks but adds 10 to ranged damage',
      icon: 'systems/dnd5e/icons/skills/green_01.jpg',
      changes: [
        {
          key: 'data.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-5',
        },
        {
          key: 'data.bonuses.rwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }

  _createAtlEffectKey(key) {
    let result = key;
    const version = (game.version ?? game.data.version).charAt(0);

    if (version == '9') {
      switch (key) {
        case 'ATL.preset':
          break;
        case 'ATL.brightSight':
          break;
        case 'ATL.dimSight':
          break;
        case 'ATL.height':
          break;
        case 'ATl.img':
          break;
        case 'ATL.mirrorX':
          break;
        case 'ATL.mirrorY':
          break;
        case 'ATL.rotation':
          break;
        case 'ATL.scale':
          break;
        case 'ATL.width':
          break;
        case 'ATL.dimLight':
          result = 'ATL.light.dim';
          break;
        case 'ATL.brightLight':
          result = 'ATL.light.bright';
          break;
        case 'ATL.lightAnimation':
          result = 'ATL.light.animation';
          break;
        case 'ATL.lightColor':
          result = 'ATL.light.color';
          break;
        case 'ATL.lightAlpha':
          result = 'ATL.light.alpha';
          break;
        case 'ATL.lightAngle':
          result = 'ATL.light.angle';
          break;
      }
    }
    return result;
  }
}
