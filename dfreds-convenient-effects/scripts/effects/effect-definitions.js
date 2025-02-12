import Constants from '../constants.js';
import CustomEffectsHandler from './custom-effects-handler.js';
import EffectHelpers from './effect-helpers.js';
import Settings from '../settings.js';

/**
 * Defines all of the effect definitions
 */
export default class EffectDefinitions {
  constructor() {
    this._customEffectsHandler = new CustomEffectsHandler();
    this._effectHelpers = new EffectHelpers();
    this._settings = new Settings();

    this._flagPrefix = 'midi-qol';
    if (game.modules.get('wire')?.active) {
      this._flagPrefix = 'wire';
    }
  }

  initialize() {
    this._conditions = this.conditions;
    this._spells = this.spells;
    this._classFeatures = this.classFeatures;
    this._equipment = this.equipment;
    this._other = this.other;

    this._all = [
      ...this._conditions,
      ...this._spells,
      ...this._classFeatures,
      ...this._equipment,
      ...this._other,
    ];
  }

  /**
   * Get all effects
   *
   * @returns {ActiveEffect[]} all the effects
   */
  get all() {
    const customEffects = this._customEffectsHandler.getCustomEffects();
    return [...customEffects, ...this._all];
  }

  /**
   * Get all the condition effects
   *
   * @returns {ActiveEffect[]} all the condition effects
   */
  get conditions() {
    return (
      this._conditions ?? [
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
      ]
    );
  }

  /**
   * Get all the spell effects
   *
   * @returns {ActiveEffect[]} all the spell effects
   */
  get spells() {
    return (
      this._spells ?? [
        this._acidArrow,
        this._aid,
        this._alterSelf,
        this._antilifeShell,
        this._arcaneHand,

        this._bane,
        this._barkskin,
        this._beaconOfHope,
        this._blackTentacles,
        this._bladeWard,
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
        this._daylight,
        this._disguiseSelf,
        this._divineFavor,
        this._divineWord,

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
        this._falseLife,
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
        this._giftOfAlacrity,
        this._globeOfInvulnerability,
        this._greaterInvisibility,
        this._guidance,
        this._guidingBolt,

        this._haste,
        this._heroesFeast,
        this._heroism,
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
        this._mindSliver,
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

        this._raulothimPsychicLance,
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
        this._vitriolicSphere,

        this._wardingBond,
        this._waterBreathing,
        this._waterWalk,
      ]
    );
  }

  /**
   * Get all the class feature effects
   *
   * @returns {ActiveEffect[]} all the class feature effects
   */
  get classFeatures() {
    return (
      this._classFeatures ?? [
        this._auraofAlacrity,
        this._auraofProtection,

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
      ]
    );
  }

  /**
   * Get all the equipment effects
   *
   * @returns {ActiveEffect[]} all the equipment effects
   */
  get equipment() {
    return (
      this._equipment ?? [
        this._bullseyeLantern,
        this._candle,
        this._hoodedLantern,
        this._lantern,
        this._torch,
      ]
    );
  }

  /**
   * Get all the other effects
   *
   * @returns {ActiveEffect[]} all the other effects
   */
  get other() {
    return (
      this._other ?? [
        this._bonusAction,
        this._coverHalf,
        this._coverThreeQuarters,
        this._coverTotal,
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
      ]
    );
  }

  /* Condition Effects */
  get _blinded() {
    return this._effectHelpers.createActiveEffect({
      name: '目盲',
      description:
        "- 一個目盲的生物無法看見，且在任何需要視覺的屬性檢定中自動失敗。對目盲生物進行的攻擊檢定具有優勢，且目盲生物的攻擊檢定具有劣勢。",
      icon: 'modules/dfreds-convenient-effects/images/blinded.svg',
      statuses: ['blinded'], 
        changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _charmed() {
    return this._effectHelpers.createActiveEffect({
      name: '魅惑',
      description:
        "- 一個被魅惑的生物不能攻擊魅惑者、或以魅惑者作為有害能力或魔法效果的目標。魅惑者在對被魅惑的生物社交互動時所進行的所有屬性檢定具有優勢。",
      icon: 'modules/dfreds-convenient-effects/images/charmed.svg',
    });
  }

  get _concentrating() {
    return this._effectHelpers.createActiveEffect({
      name: '專注',
      description:
        '有些法術會需要你維持專注以讓它的魔法效果持續作用。若你的專注中斷，則這類法術也將隨之結束。',
      icon: 'modules/dfreds-convenient-effects/images/concentrating.svg',
    });
  }

  get _dead() {
    return this._effectHelpers.createActiveEffect({
      name: '死亡',
      statuses: ['death'],
      description: '你死了。',
      icon: 'icons/svg/skull.svg',
    });
  }

  get _deafened() {
    return this._effectHelpers.createActiveEffect({
      name: '耳聾',
      description:
        "- 一個耳聾的生物無法聽見聲音，且在任何需要聽力的屬性檢定中自動失敗。",
      icon: 'modules/dfreds-convenient-effects/images/deafened.svg',
      statuses: ['deaf'],
    });
  }

  get _exhaustion1() {
    return this._effectHelpers.createActiveEffect({
      name: '力竭 1',
      description: '所有屬性檢定具有劣勢。',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion1.svg',
      changes: [
        {
          key: 'system.attributes.exhaustion',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.all`,
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
    return this._effectHelpers.createActiveEffect({
      name: '力竭 2',
      description: '移動速度減半。',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion2.svg',
      changes: [
        {
          key: 'system.attributes.exhaustion',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '2',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
      ],
    });
  }

  get _exhaustion3() {
    return this._effectHelpers.createActiveEffect({
      name: '力竭 3',
      description:
        '所有攻擊檢定和豁免檢定具有劣勢。',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion3.svg',
      changes: [
        {
          key: 'system.attributes.exhaustion',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '3',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _exhaustion4() {
    return this._effectHelpers.createActiveEffect({
      name: '力竭 4',
      description:
        '最大生命值減半。',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion4.svg',
      changes: [
        {
          key: 'system.attributes.exhaustion',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '4',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.hp.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '0.5',
          priority: 5,
        },
      ],
    });
  }

  get _exhaustion5() {
    return this._effectHelpers.createActiveEffect({
      name: '力竭 5',
      description:
        '移動速度歸零。',
      icon: 'modules/dfreds-convenient-effects/images/exhaustion5.svg',
      changes: [
        {
          key: 'system.attributes.exhaustion',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeDisadv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.hp.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '0.5',
          priority: 5,
        },
      ],
    });
  }

  get _frightened() {
    return this._effectHelpers.createActiveEffect({
      name: '恐懼',
      description:
        "- 當恐懼的來源在視線可及的範圍時，被恐懼的生物在屬性檢定和攻擊檢定上具有劣勢。<br/>- 生物不能自願地移近它恐懼的來源。",
      icon: 'modules/dfreds-convenient-effects/images/frightened.svg',
      statuses: ['fear'],
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _grappled() {
    return this._effectHelpers.createActiveEffect({
      name: '被擒',
      description:
        "- 一個被擒生物的移動速度歸0，且不能受益於任何對它移動速度的加值。",
      icon: 'modules/dfreds-convenient-effects/images/grappled.svg',
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
      ],
    });
  }

  get _incapacitated() {
    return this._effectHelpers.createActiveEffect({
      name: '無力',
      description:
        "- 一個無力的生物不能採取任何動作或反應。",
      icon: 'modules/dfreds-convenient-effects/images/incapacitated.svg',
    });
  }

  get _invisible() {
    return this._effectHelpers.createActiveEffect({
      name: '隱形',
      description:
        "- 在要進行躲藏時，該生物被視作重度遮蔽。<br/>- 對隱形生物進行的攻擊檢定具有劣勢，且隱形生物的攻擊檢定具有優勢。",
      icon: 'modules/dfreds-convenient-effects/images/invisible.svg',
      statuses: ['invisible'],
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _paralyzed() {
    return this._effectHelpers.createActiveEffect({
      name: '麻痺',
      description:
        "- 一個被麻痺的生物處於無力，且不能移動或說話。<br/>- 該生物的力量和敏捷豁免自動失敗。對該生物進行的攻擊檢定具有優勢。<br/>- 若攻擊者距離該生物5呎以內，則任何其命中該生物的攻擊都視為重擊。",
      icon: 'modules/dfreds-convenient-effects/images/paralyzed.svg',
      statuses: ['paralysis'],
      changes: [
        {
          key: `flags.${this._flagPrefix}.fail.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.fail.ability.save.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.critical.range`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
      ],
    });
  }

  get _petrified() {
    return this._effectHelpers.createActiveEffect({
      name: '石化',
      description:
        "- 你變成石雕。",
      icon: 'modules/dfreds-convenient-effects/images/petrified.svg',
      changes: [
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.fail.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.fail.ability.save.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.traits.di.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'poison',
        },
        {
          key: 'system.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'physical',
        },
        {
          key: 'system.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'magical',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
      ],
    });
  }

  get _poisoned() {
    return this._effectHelpers.createActiveEffect({
      name: '中毒',
      description:
        '- 一個中毒的生物在攻擊檢定與屬性檢定上具有劣勢。',
      icon: 'modules/dfreds-convenient-effects/images/poisoned.svg',
      statuses: ['poison'],
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _prone() {
    return this._effectHelpers.createActiveEffect({
      name: '伏地',
      description:
        "- 一個伏地的生物唯一的移動方式是爬行。<br/>- 該生物在攻擊檢定上具有劣勢。<br/>- 如果攻擊者距離該生物5呎以內，則對該生物進行的攻擊檢定將具有優勢。除此之外，對該生物的攻擊檢定具有劣勢。",
      icon: 'modules/dfreds-convenient-effects/images/prone.svg',
      statuses: ['prone'],
      changes: [
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.mwak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.msak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.rwak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.rsak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
      ],
    });
  }

  get _restrained() {
    return this._effectHelpers.createActiveEffect({
      name: '束縛',
      description:
        "- 一個被束縛生物的移動速度歸0，且不能受益於任何對它移動速度的加值。對該生物進行的攻擊檢定具有優勢。<br/>- 且該生物的攻擊檢定和敏捷豁免具有劣勢。",
      icon: 'modules/dfreds-convenient-effects/images/restrained.svg',
      statuses: ['restrain'],
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
      ],
    });
  }

  get _stunned() {
    return this._effectHelpers.createActiveEffect({
      name: '震懾',
      description:
        "- 一個被震懾的生物處於無力，不能移動。<br/>- 力量和敏捷豁免自動失敗。<br/>- 對該生物進行的攻擊檢定具有優勢。",
      icon: 'modules/dfreds-convenient-effects/images/stunned.svg',
      statuses: ['stun'],
      changes: [
        {
          key: `flags.${this._flagPrefix}.fail.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.fail.ability.save.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _unconscious() {
    return this._effectHelpers.createActiveEffect({
      name: '昏迷',
      description:
        "- 毫無防備的狀態。",
      icon: 'icons/svg/unconscious.svg',
      statuses: ['unconscious'],
      changes: [...this._paralyzed.changes],
    });
  }

  get _wounded() {
    return this._effectHelpers.createActiveEffect({
      name: 'Wounded',
      description: 'No active effects',
      icon: 'modules/dfreds-convenient-effects/images/wounded.svg',
    });
  }

  /* Spell Effects */
  get _acidArrow() {
    return this._effectHelpers.createActiveEffect({
      name: '馬友夫強酸箭',
      description: 'Causes 2d4 acid damage at the end of next turn',
      icon: 'icons/magic/acid/projectile-bolts-salvo-green.webp',
      changes: [
        {
          key: `flags.${this._flagPrefix}.OverTime`,
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value:
            'turn=end,removeCondition=true,damageRoll=2d4,damageType=acid,label=Acid Arrow',
        },
      ],
    });
  }

  get _aid() {
    return this._effectHelpers.createActiveEffect({
      name: '援助術',
      description: 'Add to current and maximum hit points for 8 hours',
      icon: 'icons/magic/life/heart-cross-blue.webp',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
    });
  }

  get _alterSelf() {
    return this._effectHelpers.createActiveEffect({
      name: '變造自身',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/magic/control/debuff-energy-hold-green.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _antilifeShell() {
    return this._effectHelpers.createActiveEffect({
      name: '反活物護罩',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-teal.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _arcaneHand() {
    return this._effectHelpers.createActiveEffect({
      name: 'Arcane Hand',
      description: 'No active effects and lasts for 1 minute',
      icon: 'icons/magic/fire/projectile-fireball-smoke-strong-teal.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _bane() {
    return this._effectHelpers.createActiveEffect({
      name: '災禍術',
      description:
        'Subtract 1d4 from all saving throws and attack rolls for 1 minute',
      icon: 'icons/magic/unholy/strike-beam-blood-red-purple.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'system.bonuses.msak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'system.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'system.bonuses.rsak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: 'system.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
      ],
    });
  }

  get _barkskin() {
    // TODO token magic effects
    return this._effectHelpers.createActiveEffect({
      name: '樹膚術',
      description: 'Upgrade AC to 16 for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-orange.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.attributes.ac.value',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '16',
          priority: 5,
        },
      ],
    });
  }

  get _beaconOfHope() {
    return this._effectHelpers.createActiveEffect({
      name: '希望信標',
      description:
        'Adds advantage to wisdom saving throws and death saving throws for 1 minute',
      icon: 'icons/magic/light/explosion-star-large-blue-yellow.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.wis`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.deathSave`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _blackTentacles() {
    return this._effectHelpers.createActiveEffect({
      name: '艾伐黑觸手',
      description: 'Apply the effects of the restrained condition for 1 minute',
      icon: 'icons/magic/nature/vines-thorned-curled-glow-teal-purple.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._restrained.changes],
    });
  }

  get _bladeWard() {
    return this._effectHelpers.createActiveEffect({
      name: '劍刃防護',
      description: 'Resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks until next round end',
      icon: 'icons/magic/defensive/barrier-shield-dome-deflect-blue.webp',
      seconds: 7,
      flags: {
        dae: {
          specialDuration: ['turnEndSource'],
        },
      },
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'slashing',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'piercing',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'bludgeoning',
        },
      ],
    });
  }

  get _bless() {
    return this._effectHelpers.createActiveEffect({
      name: '祝福術',
      description: 'Add 1d4 to all saving throws and attack rolls for 1 minute',
      icon: 'icons/magic/control/buff-flight-wings-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'system.bonuses.msak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'system.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'system.bonuses.rsak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: 'system.bonuses.rwak.attack',
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
    return this._effectHelpers.createActiveEffect({
      name: '目盲/耳聾術',
      description: 'Choose between blindness or deafness',
      icon: 'icons/magic/perception/eye-ringed-glow-angry-red.webp',
      nestedEffects: [
        this._blindnessDeafnessBlindness.name,
        this._blindnessDeafnessDeafness.name,
      ],
    });
  }

  get _blindnessDeafnessBlindness() {
    return this._effectHelpers.createActiveEffect({
      name: '目盲',
      description:
        'Disadvantage on attack rolls while granting advantage to all who attack for 1 minute',
      icon: 'icons/magic/perception/eye-ringed-glow-angry-red.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      subEffects: [this._blinded],
    });
  }

  get _blindnessDeafnessDeafness() {
    return this._effectHelpers.createActiveEffect({
      name: '耳聾',
      description: 'No active effects and lasts for 1 minute',
      icon: 'icons/magic/perception/eye-ringed-glow-angry-red.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      subEffects: [this._deafened],
    });
  }

  get _blur() {
    return this._effectHelpers.createActiveEffect({
      name: '朦朧術',
      description: 'Grants disadvantage to all who attack for 1 minute',
      icon: 'icons/magic/air/air-burst-spiral-blue-gray.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.all`,
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
    return this._effectHelpers.createActiveEffect({
      name: '造成恐懼',
      description: 'Fear lasts for 1 minute',
      icon: 'icons/magic/death/skeleton-worn-skull-tan.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._frightened.changes],
    });
  }

  get _charmPerson() {
    return this._effectHelpers.createActiveEffect({
      name: '魅惑人類',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/magic/fire/explosion-fireball-medium-purple-pink.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [...this._charmed.changes],
    });
  }

  get _command() {
    return this._effectHelpers.createActiveEffect({
      name: '命令術',
      description: 'No active effects and lasts until the end of next turn',
      icon: 'icons/magic/fire/explosion-fireball-small-purple.webp',
      seconds: CONFIG.time.roundTime,
      turns: 1,
    });
  }

  get _comprehendLanguages() {
    return this._effectHelpers.createActiveEffect({
      name: '通曉語言',
      description: 'Adds all languages for 1 hour',
      icon: 'icons/magic/symbols/runes-triangle-orange-purple.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.traits.languages.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagion() {
    return this._effectHelpers.createActiveEffect({
      name: '疫病術',
      description:
        'Choose between blinding sickness, filth fever, flesh rot, mindfire, seizure, or slimy doom',
      icon: 'icons/magic/unholy/strike-beam-blood-large-red-purple.webp',
      nestedEffects: [
        this._contagionBlindingSickness.name,
        this._contagionFilthFever.name,
        this._contagionFleshRot.name,
        this._contagionMindfire.name,
        this._contagionSeizure.name,
        this._contagionSlimyDoom.name,
      ],
    });
  }

  get _contagionBlindingSickness() {
    return this._effectHelpers.createActiveEffect({
      name: '失明症',
      description:
        'Disadvantage on wisdom checks and wisdom saving throws for 7 days',
      icon: 'icons/magic/unholy/strike-beam-blood-large-red-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.wis`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.wis`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        ...this._blinded.changes,
      ],
    });
  }

  get _contagionFilthFever() {
    return this._effectHelpers.createActiveEffect({
      name: '穢熱病',
      description:
        'Disadvantage on strength checks strength saving throws, and attacks that use strength for 7 days',
      icon: 'icons/magic/unholy/strike-beam-blood-large-red-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionFleshRot() {
    return this._effectHelpers.createActiveEffect({
      name: '血肉潰爛',
      description:
        'Disadvantage on charisma checks and vulnerability to all damage',
      icon: 'icons/magic/unholy/strike-beam-blood-large-red-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.cha`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.traits.dv.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionMindfire() {
    return this._effectHelpers.createActiveEffect({
      name: '腦熱症',
      description:
        'Disadvantage on intelligence checks and intelligence saving throws for 7 days',
      icon: 'icons/magic/unholy/strike-beam-blood-large-red-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.int`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.int`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionSeizure() {
    return this._effectHelpers.createActiveEffect({
      name: '癲癇',
      description:
        'Disadvantage on dexterity checks, dexterity saving throws, and attacks that use dexterity for 7 days',
      icon: 'icons/magic/unholy/strike-beam-blood-large-red-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _contagionSlimyDoom() {
    return this._effectHelpers.createActiveEffect({
      name: '黏濘惡疾',
      description:
        'Disadvantage on constitution checks and constitution saving throws for 7 days',
      icon: 'icons/magic/unholy/strike-beam-blood-large-red-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_WEEK,
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.con`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.con`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _darkvision() {
    return this._effectHelpers.createActiveEffect({
      name: '黑暗視覺',
      description: 'Upgrade darkvision to 60 ft. for 8 hours',
      icon: 'icons/magic/perception/eye-ringed-glow-angry-small-red.webp',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: 'system.attributes.senses.darkvision',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 5,
        },
      ],
      atlChanges: [
        {
          key: 'ATL.sight.range',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 5,
        },
        {
          key: 'ATL.sight.visionMode',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'darkvision',
          priority: 5,
        },
      ],
    });
  }

  get _daylight() {
    return this._effectHelpers.createActiveEffect({
      name: '晝明術',
      description: 'Emits 60/120 light for 1 hour (requires ATL)',
      icon: 'icons/magic/light/explosion-star-blue-yellow.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '120',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '60',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.35,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "pulse", "speed": 3,"intensity": 1}',
        },
      ],
    });
  }

  get _disguiseSelf() {
    return this._effectHelpers.createActiveEffect({
      name: '易容術',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/magic/control/debuff-energy-hold-teal-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _divineFavor() {
    return this._effectHelpers.createActiveEffect({
      name: '神恩術',
      description: 'Add 1d4 radiant damage to weapon attacks for 1 minute',
      icon: 'icons/magic/fire/dagger-rune-enchant-flame-blue-yellow.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.bonuses.weapon.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4[radiant]',
        },
      ],
    });
  }

  get _divineWord() {
    return this._effectHelpers.createActiveEffect({
      name: '聖言術',
      description: 'Adds various effects based on the remaining hit points',
      icon: 'icons/magic/light/explosion-star-large-orange-purple.webp',
      isDynamic: true,
    });
  }

  get _enhanceAbility() {
    return this._effectHelpers.createActiveEffect({
      name: '強化屬性',
      description:
        "Choose between Bear's Endurance, Bull's Strength, Cat's Grace, Eagle's Splendor, Fox's Cunning, or Owl's Wisdom",
      icon: 'icons/magic/control/buff-flight-wings-runes-purple.webp',
      nestedEffects: [
        this._enhanceAbilityBearsEndurance.name,
        this._enhanceAbilityBullsStrength.name,
        this._enhanceAbilityCatsGrace.name,
        this._enhanceAbilityEaglesSplendor.name,
        this._enhanceAbilityFoxsCunning.name,
        this._enhanceAbilityOwlsWisdom.name,
      ],
    });
  }

  get _enhanceAbilityBearsEndurance() {
    return this._effectHelpers.createActiveEffect({
      name: "熊之堅韌",
      description:
        'Advantage on constitution checks and 2d6 temp hit points for 1 hour',
      icon: 'icons/magic/control/buff-flight-wings-runes-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.con`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityBullsStrength() {
    return this._effectHelpers.createActiveEffect({
      name: "牛之力量",
      description:
        'Advantage on strength checks and double maximum carrying capacity for 1 hour',
      icon: 'icons/magic/control/buff-flight-wings-runes-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.encumbrance.max',
          mode: CONST.ACTIVE_EFFECT_MODES.MULTIPLY,
          value: '2',
          priority: 5,
        },
      ],
    });
  }

  get _enhanceAbilityCatsGrace() {
    return this._effectHelpers.createActiveEffect({
      name: "貓之優雅",
      description: 'Advantage on dexterity checks for 1 hour',
      icon: 'icons/magic/control/buff-flight-wings-runes-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityEaglesSplendor() {
    return this._effectHelpers.createActiveEffect({
      name: "鷹之威儀",
      description: 'Advantage on charisma checks for 1 hour',
      icon: 'icons/magic/control/buff-flight-wings-runes-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.cha`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityFoxsCunning() {
    return this._effectHelpers.createActiveEffect({
      name: "狐之狡黠",
      description: 'Advantage on intelligence checks for 1 hour',
      icon: 'icons/magic/control/buff-flight-wings-runes-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.int`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enhanceAbilityOwlsWisdom() {
    return this._effectHelpers.createActiveEffect({
      name: "梟之睿智",
      description: 'Advantage on wisdom checks for 1 hour',
      icon: 'icons/magic/control/buff-flight-wings-runes-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.wis`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enlargeReduce() {
    return this._effectHelpers.createActiveEffect({
      name: '變巨/縮小術',
      description: 'Choose between Enlarge or Reduce',
      icon: 'icons/magic/control/energy-stream-link-large-blue.webp',
      nestedEffects: [
        this._enlargeReduceEnlarge.name,
        this._enlargeReduceReduce.name,
      ],
    });
  }

  get _enlargeReduceEnlarge() {
    return this._effectHelpers.createActiveEffect({
      name: '變巨',
      description:
        'Add 1d4 to damage and advantage on strength checks and strength saving throws for 1 minute',
      icon: 'icons/magic/control/energy-stream-link-large-blue.webp',
      isDynamic: true,
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.bonuses.weapon.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d4',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _enlargeReduceReduce() {
    return this._effectHelpers.createActiveEffect({
      name: '縮小',
      description:
        'Subtract 1d4 from damage and disadvantage on strength checks and strength saving throws for 1 minute',
      icon: 'icons/magic/control/energy-stream-link-large-blue.webp',
      isDynamic: true,
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.bonuses.weapon.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-1d4',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.check.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _faerieFire() {
    return this._effectHelpers.createActiveEffect({
      name: '妖火術',
      description: 'Grants advantage to all who attack for 1 minute',
      icon: 'icons/magic/fire/projectile-meteor-salvo-strong-teal.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.light.animation',
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
    return this._effectHelpers.createActiveEffect({
      name: '摹造生命',
      description: 'Add temporary hit points 1 hour',
      icon: 'icons/magic/life/heart-cross-purple-orange.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _featherFall() {
    return this._effectHelpers.createActiveEffect({
      name: '羽落術',
      description: 'No active effects and lasts for 1 minute',
      icon: 'icons/magic/air/wind-swirl-pink-purple.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _feeblemind() {
    return this._effectHelpers.createActiveEffect({
      name: '弱智術',
      description: 'Set intelligence and charisma scores to 1 until removed',
      icon: 'icons/magic/light/explosion-star-large-teal-purple.webp',
      changes: [
        {
          key: 'system.abilities.int.value',
          mode: CONST.ACTIVE_EFFECT_MODES.DOWNGRADE,
          value: '1',
          priority: 25,
        },
        {
          key: 'system.abilities.cha.value',
          mode: CONST.ACTIVE_EFFECT_MODES.DOWNGRADE,
          value: '1',
          priority: 25,
        },
      ],
    });
  }

  get _fireShield() {
    return this._effectHelpers.createActiveEffect({
      name: '火焰護盾',
      description: 'Choose between cold or fire resistance',
      icon: 'icons/magic/defensive/shield-barrier-flaming-pentagon-red.webp',
      nestedEffects: [
        this._fireShieldColdResistance.name,
        this._fireShieldFireResistance.name,
      ],
    });
  }

  get _fireShieldColdResistance() {
    return this._effectHelpers.createActiveEffect({
      name: '火焰護盾 (寒冰抗性)',
      description: 'Add damage resistance to cold for 10 minutes',
      icon: 'icons/magic/defensive/shield-barrier-flaming-pentagon-red.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'cold',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.light.animation',
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
    return this._effectHelpers.createActiveEffect({
      name: '火焰護盾 (火焰抗性)',
      description: 'Add damage resistance to fire for 10 minutes',
      icon: 'icons/magic/defensive/shield-barrier-flaming-pentagon-blue.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'fire',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.COLD_FIRE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.light.animation',
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
    return this._effectHelpers.createActiveEffect({
      name: '尋找捷徑',
      description: 'No active effects and lasts for 1 day',
      icon: 'icons/magic/light/explosion-star-teal.webp',
      seconds: Constants.SECONDS.IN_ONE_DAY,
    });
  }

  get _fly() {
    return this._effectHelpers.createActiveEffect({
      name: '飛行術',
      description: 'Upgrade flying speed to 60 ft. for 10 minutes',
      icon: 'icons/magic/control/energy-stream-link-white.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      statuses: ['fly'],
      changes: [
        {
          key: 'system.attributes.movement.fly',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '60',
          priority: 25,
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Evade Stance',
        },
      ],
    });
  }

  get _foresight() {
    return this._effectHelpers.createActiveEffect({
      name: '預視術',
      description:
        'Grants advantage on attack rolls, ability checks, and saving throws while granting disadvantage to all who attack for 8 hours',
      icon: 'icons/magic/perception/eye-ringed-glow-angry-large-teal.webp',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'flags.dnd5e.initiativeAdv',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _freedomOfMovement() {
    return this._effectHelpers.createActiveEffect({
      name: '行動自如術',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/skills/melee/strike-blade-knife-white-red.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  get _gaseousForm() {
    return this._effectHelpers.createActiveEffect({
      name: '氣化形體',
      description: 'Transform into a misty for 1 hour',
      icon: 'icons/magic/air/wind-swirl-gray-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
        {
          key: 'system.attributes.movement.fly',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
          priority: 50,
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'physical',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.con`,
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

  get _frostbite() {
    return this._effectHelpers.createActiveEffect({
      name: '霜噬',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/magic/water/snowflake-ice-snow-white.webp',
      seconds: CONFIG.time.roundTime,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['1Attack:mwak', '1Attack:rwak'],
        },
      },
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.mwak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.rwak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _giftOfAlacrity() {
    return this._effectHelpers.createActiveEffect({
      name: '靈敏之賜',
      description: 'Initiative plus 1d8 for 8 hour',
      icon: 'icons/skills/movement/figure-running-gray.webp',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: 'system.attributes.init.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1d8',
        },
      ],
    });
  }

  get _globeOfInvulnerability() {
    return this._effectHelpers.createActiveEffect({
      name: '法術無效結界',
      description: 'No active effects and lasts for 1 minute',
      icon: 'icons/magic/defensive/shield-barrier-flaming-pentagon-blue.webp',
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

  get _greaterInvisibility() {
    return this._effectHelpers.createActiveEffect({
      name: '高等隱形術',
      description:
        'Grants advantage on attack rolls while forcing disadvantage to all who attack for 1 minute',
      icon: 'icons/magic/air/fog-gas-smoke-swirling-gray.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      statuses: ['invisible'],
      subEffects: [this._invisible],
    });
  }

  get _guidance() {
    return this._effectHelpers.createActiveEffect({
      name: '指導術',
      description: 'Adds 1d4 to one ability or skill check for 1 minute',
      icon: 'icons/magic/control/buff-flight-wings-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: `flags.${this._flagPrefix}.optional.guidance.label`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Guidance',
        },
        {
          key: `flags.${this._flagPrefix}.optional.guidance.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '+1d4',
        },
        {
          key: `flags.${this._flagPrefix}.optional.guidance.skill.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '+1d4',
        },
      ],
    });
  }

  get _guidingBolt() {
    return this._effectHelpers.createActiveEffect({
      name: '光導箭',
      description:
        'Grants advantage to next attacker or until the end of next turn',
      icon: 'icons/magic/fire/projectile-fireball-smoke-large-blue.webp',
      seconds: CONFIG.time.roundTime,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['isAttacked'],
        },
      },
      changes: [
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _haste() {
    return this._effectHelpers.createActiveEffect({
      name: '加速術',
      description:
        'Double speed, add 2 to AC, and advantage on dexterity saving throws for 1 minute',
      icon: 'icons/magic/control/buff-flight-wings-runes-purple.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*2',
          priority: 25,
        },
      ],
      tokenMagicChanges: [
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'zoomblur',
        },
      ],
    });
  }

  get _heroesFeast() {
    return this._effectHelpers.createActiveEffect({
      name: "英雄宴",
      description:
        'Immunity to poison and frightened, make all wisdom saving throws with advantage, and hit point maximum increases by 2d10 for 24 hours',
      icon: 'icons/magic/life/heart-cross-strong-flame-purple-orange.webp',
      seconds: Constants.SECONDS.IN_ONE_DAY,
      changes: [
        {
          key: 'system.traits.di.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'poison',
        },
        {
          key: 'system.traits.ci.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'frightened',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.wis`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _heroism() {
    return this._effectHelpers.createActiveEffect({
      name: '英雄氣概',
      description: 'Immunity to frightened for 1 minute',
      icon: 'icons/magic/life/heart-cross-strong-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.traits.ci.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'frightened',
        },
        {
          key: `flags.${this._flagPrefix}.OverTime`,
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: 'turn=end,damageRoll=@attributes.spellmod,damageType=temphp,label=英雄氣概',
        },
      ],
    });
  }

  get _hideousLaughter() {
    return this._effectHelpers.createActiveEffect({
      name: '塔莎狂笑術',
      description:
        'Apply the effects of the prone and incapacitated conditions for 1 minute',
      icon: 'icons/magic/fire/explosion-fireball-medium-purple-pink.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [...this._incapacitated.changes, ...this._prone.changes],
    });
  }

  get _holdMonster() {
    return this._effectHelpers.createActiveEffect({
      name: '怪物定身術',
      description: 'Apply the effects of the paralyzed condition for 1 minute',
      icon: 'icons/magic/control/debuff-chains-ropes-red.webp',
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
  // flags.${this._flagPrefix}.OverTime
  // turn=end,
  // saveAbility=wis,
  // saveDC=30,
  // label=Hold Person
  get _holdPerson() {
    return this._effectHelpers.createActiveEffect({
      name: '人類定身術',
      description: 'Apply the effects of the paralyzed condition for 1 minute',
      icon: 'icons/magic/control/debuff-chains-ropes-purple.webp',
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
    return this._effectHelpers.createActiveEffect({
      name: '神聖靈光',
      description:
        'Advantage on saving throws, grant disadvantage to all who attack, and emit dim light in 5 radius (requires ATL) for 1 minute',
      icon: 'icons/magic/control/buff-flight-wings-runes-blue-white.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "sunburst", "speed": 2,"intensity": 4}',
        },
      ],
    });
  }

  get _huntersMark() {
    return this._effectHelpers.createActiveEffect({
      name: "獵人印記",
      description: 'No active effects and lasts until removed (for now)',
      icon: 'icons/magic/perception/eye-ringed-glow-angry-small-red.webp',
    });
  }

  get _hypnoticPattern() {
    return this._effectHelpers.createActiveEffect({
      name: "催眠圖紋",
      description: 'Becomes charmed, incapacitated, and has a speed of 0.',
      icon: 'icons/magic/control/fear-fright-white.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      flags: {
        dae: {
          specialDuration: ['isDamaged'],
        },
      },
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 5,
        },
      ],
      subEffects: [this._incapacitated, this._charmed],
    });
  }

  get _invisibility() {
    return this._effectHelpers.createActiveEffect({
      name: '隱形術',
      description:
        'Grants advantage on next attack roll while forcing disadvantage to all who attack for 1 hour. Expires after 1 attack.',
      icon: 'icons/magic/air/fog-gas-smoke-dense-gray.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      flags: {
        dae: {
          specialDuration: ['1Attack', '1Spell'],
        },
      },
      statuses: ['invisible'],
      subEffects: [this._invisible],
    });
  }

  get _irresistibleDance() {
    return this._effectHelpers.createActiveEffect({
      name: '奧圖狂舞術',
      description:
        'Zero movement, disadvantage on dexterity saving throws, disadvantage on attack rolls, and grants advantage to all who attack for 1 minute',
      icon: 'icons/magic/control/energy-stream-link-large-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '0',
          priority: 25,
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _jump() {
    return this._effectHelpers.createActiveEffect({
      name: '跳躍術',
      description: 'No active effects and lasts for 1 minute',
      icon: 'icons/magic/control/debuff-energy-hold-blue-yellow.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _light() {
    return this._effectHelpers.createActiveEffect({
      name: '光亮術',
      description: 'Emits 20/40 light for 1 hour (requires ATL)',
      icon: 'icons/magic/light/explosion-star-small-blue-yellow.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '40',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "pulse", "speed": 3,"intensity": 1}',
        },
      ],
    });
  }

  get _longstrider() {
    return this._effectHelpers.createActiveEffect({
      name: '大步奔行',
      description: 'Increase all movement by 10 ft. for 1 hour',
      icon: 'icons/magic/air/wind-stream-blue-gray.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '+10',
          priority: 25,
        },
      ],
    });
  }

  get _mageArmor() {
    return this._effectHelpers.createActiveEffect({
      name: '法師護甲',
      description: 'Upgrades armor to 13 + dex modifier for 8 hours',
      icon: 'icons/magic/defensive/shield-barrier-glowing-triangle-blue.webp',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
      changes: [
        {
          key: 'system.attributes.ac.calc',
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
    return this._effectHelpers.createActiveEffect({
      name: '心靈屏障',
      description: 'Adds immunity to psychic damage for 24 hours',
      icon: 'icons/magic/air/air-burst-spiral-large-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_DAY,
      changes: [
        {
          key: 'system.traits.di.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'psychic',
        },
      ],
    });
  }

  get _mindSliver() {
    return this._effectHelpers.createActiveEffect({
      name: '心靈撕裂',
      description: 'Grants disadvantage on next save or until the end of next turn',
      icon: 'icons/magic/death/undead-ghost-strike-white.webp',
      seconds: 7,
      flags: {
        dae: {
          specialDuration: ['turnEndSource', 'isSave'],
        },
      },
      changes: [
        {
          key: `system.bonuses.abilities.save`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '-1d4',
        },
      ],
    });
  }

  get _mirrorImage() {
    return this._effectHelpers.createActiveEffect({
      name: 'Mirror Image',
      description: 'No active effects and lasts for 1 minute',
      icon: 'icons/magic/control/debuff-energy-hold-levitate-pink.webp',
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
    return this._effectHelpers.createActiveEffect({
      name: '行蹤無跡',
      description: 'Add 10 to stealth checks for 1 hour',
      icon: 'icons/magic/air/fog-gas-smoke-brown.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.skills.ste.bonuses.check',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }

  get _protectionFromEnergy() {
    return this._effectHelpers.createActiveEffect({
      name: '防護能量',
      description:
        'Choose between acid, cold, fire, lightning, or thunder resistance',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-teal.webp',
      nestedEffects: [
        this._protectionFromEnergyAcid.name,
        this._protectionFromEnergyCold.name,
        this._protectionFromEnergyFire.name,
        this._protectionFromEnergyLightning.name,
        this._protectionFromEnergyThunder.name,
      ],
    });
  }

  get _protectionFromEnergyAcid() {
    // TODO token magic effects
    return this._effectHelpers.createActiveEffect({
      name: '防護酸蝕',
      description: 'Adds damage resistance to acid for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-acid.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'acid',
        },
      ],
    });
  }

  get _protectionFromEnergyCold() {
    // TODO token magic effects
    return this._effectHelpers.createActiveEffect({
      name: '防護寒冷',
      description: 'Adds damage resistance to cold for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-blue.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'cold',
        },
      ],
    });
  }

  get _protectionFromEnergyFire() {
    // TODO token magic effects
    return this._effectHelpers.createActiveEffect({
      name: '防護火焰',
      description: 'Adds damage resistance to fire for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-red.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'fire',
        },
      ],
    });
  }

  get _protectionFromEnergyLightning() {
    // TODO token magic effects
    return this._effectHelpers.createActiveEffect({
      name: '防護閃電',
      description: 'Adds damage resistance to lightning for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-blue-yellow.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'lightning',
        },
      ],
    });
  }

  get _protectionFromEnergyThunder() {
    // TODO token magic effects
    return this._effectHelpers.createActiveEffect({
      name: '防護雷鳴',
      description: 'Adds damage resistance to thunder for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-teal-purple.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'thunder',
        },
      ],
    });
  }

  get _protectionFromPoison() {
    // TODO token magic effects
    return this._effectHelpers.createActiveEffect({
      name: '防護毒素',
      description:
        'Adds resistance to poison for 1 hour (does not grant automatic advantage on saving throws against poison)',
      icon: 'icons/magic/defensive/shield-barrier-glowing-triangle-green.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'poison',
        },
      ],
    });
  }

  get _protectionFromEvilAndGood() {
    return this._effectHelpers.createActiveEffect({
      name: '防護善惡',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-blue-yellow.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _raulothimPsychicLance() {
    return this._effectHelpers.createActiveEffect({
      name: '勞洛希姆心靈騎槍',
      description: 'Incapacitated until the start of your next turn.',
      icon: 'icons/weapons/polearms/spear-flared-silver-pink.webp',
      seconds: CONFIG.time.roundTime,
      changes: [...this._incapacitated.changes]
    });
  }

  get _rayOfFrost() {
    return this._effectHelpers.createActiveEffect({
      name: '冷凍射線',
      description: 'Lowers movement by 10 ft',
      icon: 'icons/magic/light/beam-rays-blue-small.webp',
      seconds: CONFIG.time.roundTime,
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '-10',
          priority: 25,
        },
      ],
    });
  }

  get _regenerate() {
    return this._effectHelpers.createActiveEffect({
      name: '再生術',
      description: 'Regain 1 hit point at the start of each turn for 1 hour',
      icon: 'icons/magic/life/heart-cross-strong-flame-green.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: `flags.${this._flagPrefix}.OverTime.regenerate`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value:
            'label=Regenerate,turn=start,damageRoll=1,damageType=healing,condition=@attributes.hp.value > 0 && @attributes.hp.value < @attributes.hp.max',
        },
      ],
    });
  }

  get _resilientSphere() {
    return this._effectHelpers.createActiveEffect({
      name: '歐提路克魔封法球',
      description: 'Adds total immunity to all damage and half movement',
      icon: 'icons/magic/light/explosion-star-large-pink.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
        {
          key: 'system.traits.di.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _resistance() {
    return this._effectHelpers.createActiveEffect({
      name: '提升抗力',
      description: 'Add 1d4 to a single saving throw in the next minute',
      icon: 'icons/magic/defensive/shield-barrier-glowing-triangle-orange.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: `flags.${this._flagPrefix}.optional.resistance.label`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'Resistance',
        },
        {
          key: `flags.${this._flagPrefix}.optional.resistance.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '+1d4',
        },
      ],
    });
  }

  get _rimeBindingIce() {
    return this._effectHelpers.createActiveEffect({
      name: '萊姆冰封術',
      description: 'Speed down to 0 in the next minute or until one break the frost',
      icon: 'icons/magic/water/projectiles-ice-faceted-shard-salvo-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.attributes.movement.all',
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
    return this._effectHelpers.createActiveEffect({
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
    return this._effectHelpers.createActiveEffect({
      name: '護盾術',
      description: 'Add 5 to AC until next turn',
      icon: 'icons/magic/defensive/shield-barrier-glowing-triangle-magenta.webp',
      seconds: CONFIG.time.roundTime,
      flags: {
        dae: {
          specialDuration: ['turnStart'],
        },
      },
      changes: [
        {
          key: 'system.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
          priority: 5,
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
    return this._effectHelpers.createActiveEffect({
      name: '虔誠護盾',
      description: 'Adds 2 to the AC for 10 minutes',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-blue-yellow.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: 'system.attributes.ac.bonus',
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
    return this._effectHelpers.createActiveEffect({
      name: '緩速術',
      description:
        'Halves movement and and subtract 2 from AC and dexterity saving throws for 1 minute',
      icon: 'icons/magic/air/fog-gas-smoke-dense-pink.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-2',
        },
        {
          key: 'system.abilities.dex.bonuses.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-2',
        },
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '*0.5',
          priority: 25,
        },
      ],
    });
  }

  get _speakWithAnimals() {
    return this._effectHelpers.createActiveEffect({
      name: '動物交談術',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'icons/magic/nature/wolf-paw-glow-small-teal-blue.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _speakWithDead() {
    return this._effectHelpers.createActiveEffect({
      name: '死者交談術',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'icons/magic/control/fear-fright-shadow-monster-green.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _speakWithPlants() {
    return this._effectHelpers.createActiveEffect({
      name: '植物交談術',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'icons/magic/nature/leaf-glow-teal.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _spiderClimb() {
    return this._effectHelpers.createActiveEffect({
      name: '蛛行術',
      description: 'Grants climbing speed equal to walking speed for 1 hour',
      icon: 'icons/magic/control/debuff-chains-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.attributes.movement.climb',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '@attributes.movement.walk',
          priority: 25,
        },
      ],
    });
  }

  get _spiritGuardians() {
    return this._effectHelpers.createActiveEffect({
      name: '靈體守衛',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'icons/magic/light/projectile-bolts-salvo-white.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _spiritualWeapon() {
    return this._effectHelpers.createActiveEffect({
      name: 'Spiritual Weapon',
      description: 'No active effects and lasts for 1 minute',
      icon: 'icons/magic/fire/dagger-rune-enchant-flame-purple.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
    });
  }

  get _stoneskin() {
    // TODO token magic effects
    return this._effectHelpers.createActiveEffect({
      name: '石膚術',
      description: 'Adds resistance to non-magical physical damage for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-orange.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'physical',
        },
      ],
    });
  }

  get _suggestion() {
    return this._effectHelpers.createActiveEffect({
      name: '暗示術',
      description: 'No active effects and lasts for 8 hours',
      icon: 'icons/magic/air/air-burst-spiral-pink.webp',
      seconds: Constants.SECONDS.IN_EIGHT_HOURS,
    });
  }

  get _telekinesis() {
    return this._effectHelpers.createActiveEffect({
      name: '心靈遙控',
      description: 'No active effects and lasts for 10 minutes',
      icon: 'icons/magic/control/debuff-energy-hold-levitate-yellow.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
    });
  }

  get _trueStrike() {
    return this._effectHelpers.createActiveEffect({
      name: '克敵機先',
      description:
        'Grants advantage on next attack or until the end of next turn',
      icon: 'icons/magic/fire/dagger-rune-enchant-blue-gray.webp',
      seconds: CONFIG.time.roundTime,
      turns: 1,
      flags: {
        dae: {
          specialDuration: ['1Attack'],
        },
      },
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _viciousMockery() {
    return this._effectHelpers.createActiveEffect({
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
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _vitriolicSphere() {
    return this._effectHelpers.createActiveEffect({
      name: '硫酸法球',
      description: 'Causes 5d4 acid damage at the end of next turn',
      icon: 'icons/magic/acid/projectile-faceted-glob.webp',
      changes: [
        {
          key: `flags.${this._flagPrefix}.OverTime`,
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value:
            'turn=end,removeCondition=true,damageRoll=5d4,damageType=acid,label=Vitriolic Sphere',
        },
      ],
    });
  }
  
  get _wardingBond() {
    return this._effectHelpers.createActiveEffect({
      name: '守護聯結 Bond',
      description: 'Adds 1 to AC and saving throws and grants resistance to all damage for 1 hour',
      icon: 'icons/magic/defensive/shield-barrier-flaming-diamond-blue-yellow.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      changes: [
        {
          key: 'system.attributes.ac.bonus',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1',
        },
        {
          key: 'system.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+1',
        },
        {
          key: 'system.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'physical',
        },
        {
          key: 'system.traits.dr.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'magical',
        },
      ],
    });
  }

  get _waterBreathing() {
    return this._effectHelpers.createActiveEffect({
      name: '水下呼吸',
      description: 'No active effects and lasts for 24 hours',
      icon: 'icons/magic/water/pseudopod-swirl-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_DAY,
    });
  }

  get _waterWalk() {
    return this._effectHelpers.createActiveEffect({
      name: '水面行走',
      description: 'No active effects and lasts for 1 hour',
      icon: 'icons/creatures/slimes/slime-movement-swirling-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
    });
  }

  /** Class specific */
      get _auraofAlacrity() {
      return this._effectHelpers.createActiveEffect({
        name: '迅捷靈光',
        description:
          'You or friendly creature within 5 feet of you walking speed increases by 10 feet.',
        icon: 'icons/skills/movement/feet-winged-boots-brown.webp',
        changes: [
          {          
            key: 'system.attributes.movement.walk',
            mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
            value: '+10',
            priority: 25,
          },
        ],
        flags: {
          "ActiveAuras": {
            "isAura": true,
            "aura": "Allies",
            "radius": 5,
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

  get _auraofProtection() {
    return this._effectHelpers.createActiveEffect({
      name: '守護靈光',
      description:
        'You or friendly creature within 10 feet of you saving throw gains your Charisma modifier.',
      icon: 'icons/magic/holy/saint-glass-portrait-halo.webp',
      isDynamic: true,
      changes: [
        {          
          key: 'system.bonuses.abilities.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '@abilities.cha.mod',
          priority: 5,
        },
      ],
      flags: {
        "ActiveAuras": {
          "isAura": true,
          "aura": "Allies",
          "radius": 10,
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

  get _bardicInspiration() {
    return this._effectHelpers.createActiveEffect({
      name: '吟遊激勵',
      description:
        'Add a dice to a single ability check, attack roll, or saving throw in the next 10 minutes',
      icon: 'icons/skills/melee/unarmed-punch-fist.webp',
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      nestedEffects: [
        this._bardicInspirationD6.name,
        this._bardicInspirationD8.name,
        this._bardicInspirationD10.name,
        this._bardicInspirationD12.name,
      ],
    });
  }

  get _bardicInspirationD6() {
    return this._effectHelpers.createActiveEffect({
      name: '吟遊激勵 (d6)',
      description: 'For bards from level 1 to level 4',
      icon: 'icons/skills/melee/unarmed-punch-fist.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.label`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'Bardic Inspiration',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d6',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d6',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.skill.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d6',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d6',
        },
      ],
    });
  }

  get _bardicInspirationD8() {
    return this._effectHelpers.createActiveEffect({
      name: '吟遊激勵 (d8)',
      description: 'For bards from level 5 to level 9',
      icon: 'icons/skills/melee/unarmed-punch-fist.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.label`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'Bardic Inspiration',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d8',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d8',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.skill.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d8',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d8',
        },
      ],
    });
  }

  get _bardicInspirationD10() {
    return this._effectHelpers.createActiveEffect({
      name: '吟遊激勵 (d10)',
      description: 'For bards from level 10 to level 14',
      icon: 'icons/skills/melee/unarmed-punch-fist.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.label`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'Bardic Inspiration',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d10',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d10',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.skill.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d10',
        },        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d10',
        },
      ],
    });
  }

  get _bardicInspirationD12() {
    return this._effectHelpers.createActiveEffect({
      name: '吟遊激勵 (d12)',
      description: 'For bards from level 15 to level 20',
      icon: 'icons/skills/melee/unarmed-punch-fist.webp',
      isViewable: this._settings.showNestedEffects,
      seconds: Constants.SECONDS.IN_TEN_MINUTES,
      changes: [
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.label`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'Bardic Inspiration',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d12',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.save.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d12',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.skill.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d12',
        },
        {
          key: `flags.${this._flagPrefix}.optional.bardic-inspiration.check.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '+1d12',
        },
      ],
    });
  }

  get _channelDivinitySacredWeapon() {
    return this._effectHelpers.createActiveEffect({
      name: '引導神力:至聖武器',
      description:
        'Add charisma modifier (minimum +1) to all weapon attack rolls and emits 20/40 light for 1 minute (requires ATL)',
      icon: 'icons/weapons/swords/sword-gold-holy.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: 'system.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+max(1, @abilities.cha.mod)',
        },
        {
          key: 'system.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+max(1, @abilities.cha.mod)',
        },
      ],
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '40',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.WHITE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.25,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "sunburst", "speed": 2,"intensity": 4}',
        },
      ],
    });
  }

  get _channelDivinityTurnTheUnholy() {
    return this._effectHelpers.createActiveEffect({
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
    return this._effectHelpers.createActiveEffect({
      name: '引導神力:驅散不死',
      description:
        'No active effects and lasts for 1 minute. Expires on taking damage.',
      icon: 'icons/magic/fire/flame-burning-creature-skeleton.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      flags: {
        dae: {
          specialDuration: ['isDamaged'],
        },
      },
    });
  }

  get _eyesofNight() {
    return this._effectHelpers.createActiveEffect({
      name: '黑夜明目',
      description: 'Upgrade darkvision to 300 ft. for 1 hours',
      icon: 'icons/magic/perception/hand-eye-fire-blue.webp',
      seconds: Constants.SECONDS.IN_ONE_HOURS,
      changes: [
        {
          key: 'system.attributes.senses.darkvision',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '300',
          priority: 5,
        },
      ],
      atlChanges: [
        {
          key: 'ATL.sight.range',
          mode: CONST.ACTIVE_EFFECT_MODES.UPGRADE,
          value: '300',
          priority: 5,
        },
        {
          key: 'ATL.sight.visionMode',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 'darkvision',
          priority: 5,
        },
      ],
    });
  }

  get _kiEmptyBody() {
    return this._effectHelpers.createActiveEffect({
      name: '空靈體',
      description:
        'Grants advantage on attack rolls, forces disadvantage to all who attack, and grants resistance to all damage except force for 1 minute',
      icon: 'icons/magic/perception/silhouette-stealth-shadow.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'physical',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'bludgeoning',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'piercing',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'slashing',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'silver',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'adamant',
        },
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
          value: 'psychic',
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
      ],
    });
  }

  get _kiPatientDefense() {
    return this._effectHelpers.createActiveEffect({
      name: '堅強防禦',
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
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _steadyAim() {
    return this._effectHelpers.createActiveEffect({
      name: '手穩就準',
      description:
        'Advantage on next attack roll on the current turn, speed is 0 until the end of the current turn',
      icon: 'icons/skills/ranged/archery-bow-attack-yellow.webp',
      seconds: CONFIG.time.roundTime,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.attributes.movement.all',
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

  get _stunningStrike() {
    return this._effectHelpers.createActiveEffect({
      name: '震懾拳',
      description:
        'Interfere with the flow of ki in an opponent, the target be stunned until the end of your next turn',
      icon: 'icons/skills/melee/unarmed-punch-fist-yellow-red.webp',
      changes: [...this._stunned.changes],
      flags: {
        dae: {
          specialDuration: ['turnEndSource'],
        },
      },
    });
  }

  get _twilightSanctuary() {
    return this._effectHelpers.createActiveEffect({
      name: '暮光聖域',
      description:
        'You grant 30-foot radius temporary hit points equal to 1d6 + cleric level or end one charmed or frightened effect for 1 minute.',
      icon: 'icons/magic/life/heart-area-circle-red-green.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      isDynamic: true,
      changes: [
        {          
          key: `flags.${this._flagPrefix}.OverTime`,
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

  get _rage() {
    return this._effectHelpers.createActiveEffect({
      name: '狂暴',
      description:
        'Advantage on strength checks and strength saving throws, a variable bonus to melee damage based on barbarian level, and resistance to piercing, bludgeoning, and slashing damage for 1 minute. Also handles Path of the Totem Warrior resistances.',
      icon: 'icons/creatures/abilities/mouth-teeth-human.webp',
      seconds: Constants.SECONDS.IN_ONE_MINUTE,
      isDynamic: true,
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.ability.check.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'slashing',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'piercing',
        },
        {
          key: 'system.traits.dr.value',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: 'bludgeoning',
        },
        {
          key: 'system.bonuses.mwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+ @scale.barbarian.rage',
        },
        {
          key: 'macro.tokenMagic',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: 'outline',
        },
      ],
    });
  }

  get _recklessAttack() {
    return this._effectHelpers.createActiveEffect({
      name: '魯莽攻擊',
      description:
        'Advantage on melee attacks for a turn and grants advantage to those who attack for 1 round',
      icon: 'icons/skills/melee/blade-tips-triple-bent-white.webp',
      flags: {
        dae: {
          specialDuration: ['turnStart'],
        },
      },
      changes: [
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
      subEffects: [
        this._effectHelpers.createActiveEffect({
          name: '魯莽攻擊 (攻擊優勢)',
          description: 'Advantage on melee attacks until end of turn',
          icon: 'icons/skills/melee/blade-tips-triple-bent-white.webp',
          turns: 1,
          changes: [
            {
              key: `flags.${this._flagPrefix}.advantage.attack.mwak`,
              mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
              value: '1',
            },
          ],
        }),
      ],
    });
  }

  /* Equipment effects */
  get _bullseyeLantern() {
    return this._effectHelpers.createActiveEffect({
      name: '牛眼提燈',
      description:
        'Adds lantern light in a 60 degree cone for 6 hours (requires ATL)',
      icon: 'icons/sundries/lights/lantern-iron-yellow.webp',
      seconds: Constants.SECONDS.IN_SIX_HOURS,
      atlChanges: [
        {
          key: 'ATL.light.angle',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '60',
        },
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '120',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '60',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.4,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  get _candle() {
    return this._effectHelpers.createActiveEffect({
      name: '蠟燭',
      description: 'Adds candle light for 1 hour (requires ATL)',
      icon: 'icons/sundries/lights/candle-unlit-white.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '10',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.2,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  get _hoodedLantern() {
    return this._effectHelpers.createActiveEffect({
      name: '提燈 (附蓋)',
      description: 'Adds hooded lantern light for 6 hours (requires ATL)',
      icon: 'icons/sundries/lights/lantern-iron-yellow.webp',
      seconds: Constants.SECONDS.IN_SIX_HOURS,
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '5',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '0',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.4,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  get _lantern() {
    return this._effectHelpers.createActiveEffect({
      name: '提燈',
      description: 'Adds lantern light for 6 hours (requires ATL)',
      icon: 'icons/sundries/lights/lantern-iron-yellow.webp',
      seconds: Constants.SECONDS.IN_SIX_HOURS,
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '60',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '30',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.4,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  get _torch() {
    return this._effectHelpers.createActiveEffect({
      name: '火炬',
      description: 'Adds torch light for 1 hour (requires ATL)',
      icon: 'icons/sundries/lights/torch-black.webp',
      seconds: Constants.SECONDS.IN_ONE_HOUR,
      atlChanges: [
        {
          key: 'ATL.light.dim',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '40',
        },
        {
          key: 'ATL.light.bright',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '20',
        },
        {
          key: 'ATL.light.color',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: Constants.COLORS.FIRE,
        },
        {
          key: 'ATL.light.alpha',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: 0.4,
        },
        {
          key: 'ATL.light.animation',
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '{"type": "torch","speed": 1,"intensity": 1}',
        },
      ],
    });
  }

  /* Other effects */
  get _bonusAction() {
    return this._effectHelpers.createActiveEffect({
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
    return this._effectHelpers.createActiveEffect({
      name: '半掩蔽',
      description: 'Adds 2 to AC and dexterity saving throws',
      icon: 'modules/dfreds-convenient-effects/images/broken-wall.svg',
      tint: '#dae34f',
      changes: [
        {
          key: 'system.attributes.ac.cover',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
        {
          key: 'system.abilities.dex.bonuses.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+2',
        },
      ],
    });
  }

  get _coverThreeQuarters() {
    return this._effectHelpers.createActiveEffect({
      name: '四分之三掩蔽',
      description: 'Adds 5 to AC and dexterity saving throws',
      icon: 'modules/dfreds-convenient-effects/images/brick-wall.svg',
      changes: [
        {
          key: 'system.attributes.ac.cover',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
        },
        {
          key: 'system.abilities.dex.bonuses.save',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+5',
        },
      ],
    });
  }

  get _coverTotal() {
    return this._effectHelpers.createActiveEffect({
      name: '全掩蔽',
      description: 'Causes all attacks to fail automatically',
      icon: 'modules/dfreds-convenient-effects/images/castle.svg',
      changes: [
        {
          key: `flags.${this._flagPrefix}.grants.attack.fail.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _encumbered() {
    return this._effectHelpers.createActiveEffect({
      name: '重載',
      description: 'Lowers movement by 10 ft.',
      icon: 'icons/svg/down.svg',
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '-10',
          priority: 25,
        },
      ],
    });
  }

  get _dodge() {
    return this._effectHelpers.createActiveEffect({
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
          key: `flags.${this._flagPrefix}.grants.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _flanked() {
    return this._effectHelpers.createActiveEffect({
      name: 'Flanked',
      description: 'Grants advantage to all who melee attack',
      icon: 'modules/dfreds-convenient-effects/images/encirclement.svg',
      changes: [
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.mwak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.grants.advantage.attack.msak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _flanking() {
    return this._effectHelpers.createActiveEffect({
      name: 'Flanking',
      description: 'Grants advantage on melee attack rolls',
      icon: 'icons/svg/sword.svg',
      changes: [
        {
          key: `flags.${this._flagPrefix}.advantage.attack.mwak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.advantage.attack.msak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _greatWeaponMaster() {
    return this._effectHelpers.createActiveEffect({
      name: '巨武大師',
      description: 'Subtracts 5 from melee attacks but adds 10 to melee damage',
      icon: 'icons/skills/melee/hand-grip-staff-yellow-brown.webp',
      changes: [
        {
          key: 'system.bonuses.mwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-5',
        },
        {
          key: 'system.bonuses.mwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }

  get _heavilyEncumbered() {
    return this._effectHelpers.createActiveEffect({
      name: '超載',
      description:
        'Lowers movement by 20 ft., disadvantage on all attack rolls, and disadvantage on strength, dexterity, and constitution saves',
      icon: 'icons/svg/downgrade.svg',
      changes: [
        {
          key: 'system.attributes.movement.all',
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '-20',
          priority: 25,
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.str`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.dex`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.ability.save.con`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _inspiration() {
    return this._effectHelpers.createActiveEffect({
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
          key: `flags.${this._flagPrefix}.advantage.all`,
          mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
          value: '1',
        },
      ],
    });
  }

  get _rangedDisadvantage() {
    return this._effectHelpers.createActiveEffect({
      name: 'Ranged Disadvantage',
      description: 'Disadvantage on ranged attack rolls',
      icon: 'modules/dfreds-convenient-effects/images/broken-arrow.svg',
      changes: [
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.rwak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
        {
          key: `flags.${this._flagPrefix}.disadvantage.attack.rsak`,
          mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
          value: '1',
        },
      ],
    });
  }

  get _reaction() {
    return this._effectHelpers.createActiveEffect({
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
    return this._effectHelpers.createActiveEffect({
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
    return this._effectHelpers.createActiveEffect({
      name: '神射手',
      description:
        'Subtracts 5 from ranged attacks but adds 10 to ranged damage',
      icon: 'icons/weapons/bows/shortbow-recurve-yellow.webp',
      changes: [
        {
          key: 'system.bonuses.rwak.attack',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '-5',
        },
        {
          key: 'system.bonuses.rwak.damage',
          mode: CONST.ACTIVE_EFFECT_MODES.ADD,
          value: '+10',
        },
      ],
    });
  }
}
