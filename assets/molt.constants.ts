export const JOBS = [
    //BASALITE
    {
        name: 'BASALITE',
        subName: 'Earth Mover',
        descrip: `
            Your kind are born of the <strong>fire</strong> and <strong>embers</strong> of the <strong>molten core</strong>. 
            The very first <strong>Basalites</strong> were magickally infused volcanic rock and flowing lava, brought to life by a <strong>mad warlock</strong>. 
            Since their inception, the <strong>Basalites</strong> have been constructing a massive avatar of their god, the <strong>Embreson</strong>.
        `,
        details: {
            title: `BORN OF FIRE AND BRIMSTONE`,
            table: [
                `<strong>Molten mouth</strong>; whenever you speak, <strong>lava drools from your underbite</strong>.`,
                `Your lower half is like a slug but lava. <strong>You leave a hot, glistening trail</strong>.`,
                `Since your birthing, you’ve had nightmares of <strong>flowing water immobilizing you</strong>.`,
                `You believe you are meant to share the <strong>Embreson’s</strong> fire with the world. <strong>Let it all burn</strong>.`,
                `You have visions of a<strong> massive rock</strong> soaring through the stars and <strong>crashing</strong> into this planet long ago.`,
                `You believe all <strong>Basalites</strong> can hear the <strong>rocks speaking to them</strong>.`,
            ],
        },
        traits: [
            {
                title: `MOLTEN MOVER`,
                descrip: `
                    When using magick on rock or lava, <strong>−2 DR</strong>.
                `
            },
            {
                title: `HOT HANDS`,
                descrip: `
                    Channel the lava in your veins to your hands to burn what you touch. <strong>d6 damage</strong>.
                `
            },
            {
                title: `SULPHUR STANK`,
                descrip: `
                    Your sulphur odor stinks so badly that it distracts those not from Kör for <em>d2 rounds</em>. <strong>All rolls against them during this time are with advantage</strong>.
                `
            },
            {
                title: `BURN, MOTHER, BURN`,
                descrip: `
                    Spit a bit of embers to <span class="underline">ignite flammable objects</span>. <strong>Ranged attack to hit</strong>. 
                `
            },
            {
                title: `THROWING STONES`,
                descrip: `
                    Detach rocks from your being to hurl hot chunks in combat. <strong>d6 damage</strong>. <span class="underline">Return them to your body after or lose <strong>d2 HP</strong></span>.
                `
            },
            {
                title: `SLITHER`,
                descrip: `
                    Move over <span class="underline">fire, flowing lava, and any other hot liquid surface</span> <em>twice as fast</em> as any other ground.
                `
            },
        ],
        stats: {
            toughness: 1,
            focus: 1,
            strength: -1,
            hp: 6,
            favors: 2,
            silver: 0,
            pp: `[Presence]+d8`
        },
        gear: {
            weapons: 4,
            armor: `<strong class="underline">STONE SKIN</strong>, <strong>-d2</strong>`
        }
    },
    //BURNADAZI
    {
        name: 'BURNADAZI',
        subName: 'Shard Chewer',
        descrip: `
            You would much rather <strong>spill blood</strong> on the ground before you than <strong>sacrifice it to any god</strong>. 
            You and those sworn into the <strong>Shard Chewers</strong> are brutal and savage, governed by <strong>one simple law</strong>: the strongest rule. 
            <strong>And you’re one tough SoB</strong>.
        `,
        details: {
            title: `HATCHED IN THE PITS`,
            table: [
                `You cracked out of your shell to see all of your siblings devoured by a <strong>Grathalla</strong>.`,
                `Born with a second head that withered and died. <strong>You still talk to it</strong>.`,
                `<strong>Magickally transported into this body</strong>. In your heart, you are still human.`,
                `<strong>You are the only survivor of a small raiding party</strong>. What you saw still haunts you.`,
                `You have always been mocked for your visions of <strong>Burnadazi</strong> floating amongst the stars.`,
                `You’ve known the end is near and plan for it to be <strong>by your hands</strong>.`,
            ],
        },
        traits: [
            {
                title: `FIRE WALKER`,
                descrip: `
                    Born of fire and lava, these elements can cause you <strong>no damage</strong>.
                `
            },
            {
                title: `SCALY HIDE`,
                descrip: `
                    Rigid, spiny scales run along most of your body. <strong><span class="underline">Natural Armor</span> −d2</strong>.
                `
            },
            {
                title: `SNAPPING JAWS`,
                descrip: `
                    Your fang-filled maw is a terrifying sight. <strong>d4 damage</strong> + <em>1-in-6 chance</em> the jaw will <span class="underline">lock on to the opponent</span>.
                `
            },
            {
                title: `INNER FIRE`,
                descrip: `
                    <em>Once per encounter</em>, when taking damage, <span class="underline">you can expel fire from inside of you</span>, inflicting an <strong>equal amount of damage on the attacker</strong>.
                `
            },
            {
                title: `RECKLESS ABANDON`,
                descrip: `
                    You charge into battle, fearing nothing in your path. <span class="underline">Gain advantage on <strong>melee attacks</strong> and disadvantage on <strong>defense</strong></span>.
                `
            },
            {
                title: `SHRAPNEL SPITTER`,
                descrip: `
                    Metal, glass, or anything in between can be crunched up in your maw and spit out with furious force. 
                    <p><strong>d8 damage</strong>, <em>takes a round to chew up objects</em>. <div><span class="underline">On a Fumble</span>, swallow sharp bits, causing <strong>d6 internal damage</strong>.</div></p>
                `
            },
        ],
        stats: {
            toughness: 1,
            presence: -2,
            strength: 2,
            hp: 8,
            favors: 4,
            silver: '1d4x10',
            pp: `[Presence]+d4`
        },
        gear: {
            weapons: 6,
            armor: 2
        }
    },
    //DATTSOFF
    {
        name: 'DATTSOFF',
        subName: 'Crystal Gazer',
        descrip: `
            You’ve traveled from deep within the <strong>Crystal Caverns</strong>, below the <strong>Glasslands</strong>, as your visions guided your journey. 
            Looking through facets of glass gems, you have seen many futures, <strong>all doused in blood</strong>. 
            In all of these eventualities, <strong>it must be by your hands</strong>. 
        `,
        details: {
            title: `REFRACTED REFLECTIONS`,
            table: [
                `You hatched from your shell in a great hall of reflections. <strong>You’ve been walking ever since</strong>.`,
                `Your parent told you a secret: <strong>Dattsoff are not from this world</strong>. You believe them.`,
                `You’ve had visions of humans whose <strong>hearts</strong> you’ve replaced with <strong>crystals</strong>. `,
                `<strong>You hunger for raw flesh</strong>. Nothing else will nourish you.`,
                `Wanting to see all the angles, <strong>you plucked out an eye</strong>, replacing it with a crystal.`,
                `You speak to gems far more than anyone else. <strong>They are all that truly listen</strong>.`,
            ],
        },
        traits: [
            {
                title: `THE SIGHT`,
                descrip: `
                    Looking through a shard from the Crystal Caverns, there is a <em>1-in-4 chance</em> you can attempt <strong>tests with advantage</strong>.
                `
            },
            {
                title: `SHARPENED BEAK`,
                descrip: `
                    <strong>d6 damage</strong>. <em>Crits break a bone</em>.
                `
            },
            {
                title: `ALL UP IN YOUR SPACE`,
                descrip: `
                    Summoning comes natural to you, <strong>−2 DR for this divination</strong>.
                `
            },
            {
                title: `BEND REALITY`,
                descrip: `
                    You see things far differently than they are. <strong>Transformation DR −2 for this magick</strong>.
                `
            },
            {
                title: `SHELL SHOCK`,
                descrip: `
                    You can pull your entire body inside your shell; <strong><u>Carapace</u></strong> <strong>−d8 while inside</strong>.
                `
            },
            {
                title: `ELECTRIC ANTLERS`,
                descrip: `
                    A spark of energy arcs between your antlers, causing <strong>d4 damage</strong> for each PP spent.
                `
            },
        ],
        stats: {
            agility: -2,
            presence: 1,
            focus: 1,
            hp: 6,
            favors: 4,
            silver: '1d2x10',
            pp: `[Presence]+d6`
        },
        gear: {
            weapons: 4,
            armor: `<strong class="underline">NATURAL CARAPICE</strong>, <strong>-d2</strong>`
        }
    },
    //ERDVERKEN
    {
        name: 'ERDVERKEN',
        subName: 'Bone Collector',
        descrip: `
            Motivated by <strong>glory</strong>, <strong>fortune</strong>, or <strong>ancient truths</strong>, you have a reason to risk your life on the surface. 
            <strong>Unlocking ancient magicks</strong> has always been at the forefront of your expeditions. 
            Unlike other inhabitants of <strong>Kör</strong>, you need <strong>human bones to harness magick</strong>. 
            You, like every other <strong>Erdverken</strong>, need more skulls! 
            <strong>Maybe you’ll find some today</strong>.
        `,
        details: {
            title: `MEAT ON THE BONES`,
            table: [
                `You hunger for the hunt, and <strong>collecting bones has turned into an obsession</strong>.`,
                `<strong>The first time you ate a human</strong>, the need to collect their bones grew stronger. `,
                `<strong>Your parents do not approve of your bone collecting</strong>. They believe there are other ways to harness magick.`,
                `You have recurring dreams of traveling through a dark cavern and exiting to a place <strong>high up in the stars</strong>.`,
                `You’ve brought back bones of other creatures and <strong>sold them to your cackle</strong>, claiming them to be human.`,
                `You fear, when the Molt is complete, <strong>there will be no humans left to collect</strong>.`,
            ],
        },
        traits: [
            {
                title: `HORN HEAD `,
                descrip: `
                    You go face-first into battle. <u>On a successful attack</u>, <em>d4 horns hit</em> for <strong>d4 damage each</strong>.
                `
            },
            {
                title: `OBSIDIAN CLAWS`,
                descrip: `
                    Your nubby fingers end in sharp obsidian points. <strong>d6 damage</strong>. <u>The tips can cut through most rock with enough time</u>.
                `
            },
            {
                title: `FRONT OF THE MARAUDERS`,
                descrip: `
                    You know the direction of where you are headed. <strong>−4 DR for related tests</strong>.
                `
            },
            {
                title: `ALWAYS WATCHING`,
                descrip: `
                    All of your eight eyes set their sights on different targets. <strong>−2 DR for tests utilizing your sight</strong>.
                `
            },
            {
                title: `NOSE TO THE GROUND`,
                descrip: `
                    <strong>Presence DR12 TEST</strong> to catch the scent of a human if they have been here in the past <em>six hours</em>.
                `
            },
            {
                title: `BONE FRAGMENTS`,
                descrip: `
                    You know how to break the bones so that you get <strong>two uses out of each one</strong>.
                `
            },
        ],
        stats: {
            agility: -2,
            presence: 1,
            focus: 1,
            hp: 6,
            favors: 4,
            silver: '1d2x10',
            pp: `d4`
        },
        gear: {
            weapons: 4,
            armor: `<strong class="underline">NATURAL CARAPICE</strong>, <strong>-d2</strong>`
        },
        extras: [
            `Start with <strong>d4 human bones</strong>. Each bone counts as a Power Point (PP). When used, <strong>it crumbles to ash</strong>.`
        ],
    },
    //GREYSKRULL
    {
        name: 'GREYSKRULL',
        subName: 'Urn Slinger',
        descrip: `
            Greyskrulls traveled to <strong>Kör</strong> through a magickal Rift many years ago. 
            Unable to find a way back to their homelands, <strong>they claimed a stretch of tunnels in Lower Mantle as their own</strong>. 
            Always wanting more, their leader, <strong>Kaldor</strong>, formed warbands to expand their foothold. 
            With rumors of the Molt circulating, the <strong>Greyskrulls</strong> are eager to join in the conquest and <strong>claim their share of the spoils</strong>.
        `,
        details: {
            title: `MAKING YOUR MARK`,
            table: [
                `You came through the Rift <strong>hungry to conquer</strong>. This still drives you.`,
                `You brought a <strong>Molten Ichorous Leech</strong> with you from your home dimension. You are saving it for a <strong>very special kill</strong>. `,
                `<strong>You have an underlying hatred of enclosed spaces</strong>. You long for fresh air.`,
                `You search for magicks to return you to your <strong>home dimension and your lost love</strong>.`,
                `You’ve had visions of your death, and <strong>you know it will be glorious</strong>.`,
                `Your <strong>chest face</strong> is always yammering on about something trivial. Its ramblings have you dreaming of <strong>cutting out your tongue</strong>.`,
            ],
        },
        traits: [
            {
                title: `CUTTHROAT`,
                descrip: `
                    You are ruthless, always going in for the kill. <em>Once per encounter</em>, <strong>deal max damage</strong>.
                `
            },
            {
                title: `QUILL HEAD`,
                descrip: `
                    The quills surrounding your face are strong as bone. <u>And they’re good for stabbing</u>. <strong>d4 damage</strong>.
                `
            },
            {
                title: `TWO FACED`,
                descrip: `
                    The face in your chest is always focused on your actions, while your head tracks what others are doing. <strong>−1 DR to defend</strong>. 
                `
            },
            {
                title: `KID ICHOR US`,
                descrip: `
                    You have mastered the magicks of converting things to <u>Molten Ichorous Leeches</u>. <strong>DR10 for living creatures or lava</strong>, <strong>DR14 for everything else</strong>.
                `
            },
            {
                title: `TALONS`,
                descrip: `
                    The claws at the ends of your toes are too big to call them anything other than talons. <strong>d4</strong> + <u>infection on a 19–20</u>, causing additional <strong>d4/day until healed</strong>.
                `
            },
            {
                title: `RIFT WALKER`,
                descrip: `
                    You see the tears of time and space around you and others. This is where you harness magick. <strong>−1 DR for Focus TESTS</strong>. 
                `
            },
        ],
        stats: {
            agility: 1,
            presence: 1,
            focus: -1,
            hp: 8,
            favors: 2,
            silver: 0,
            pp: `[Presence]+d6`
        },
        gear: {
            armor: 2,
            weapons: '2d6'
        },
        extras: [
            `Start with <strong>2d6</strong> <strong><u>Molten Ichorous Leech-filled Urns</u></strong>`,
            `Urn Slingers have been trained at throwing ceramic pots filled with <strong><u>Molten Ichorous Leeches</u></strong>. <u>When out of leeches</u>, these Greyskrulls use <strong>Transformation Magick DR14</strong> to turn lava, or a living creature, into new <strong><u>Molten Ichorous Leeches</u></strong>.`
        ],
    },
    //KARKATHIAN
    {
        name: 'KARKATHIAN',
        subName: 'Deathwalker',
        descrip: `
            <strong>Karkathians</strong> have pilgrimaged to <strong>Kör</strong> to understand why the world has been shifting and causing their home tunnels to collapse. 
            After hearing the prophecies and seeing that <strong>the Molt had begun</strong>, the <strong>Karkathians</strong> knew there was no home left to go back to. 
            They just hope that, as the ground breaks, <strong>more of their dead do not rise from the ashes</strong>. 
            Many have <strong>faces carved into their horns</strong> to scare off those who have risen. 
        `,
        details: {
            title: `SHROUDED BY DEATH`,
            table: [
                `Your first horn was carved to ward off spirits when your <strong>twin died shortly after birth</strong>.`,
                `You stole a horn from a fallen loved one. <strong>They haunt you at night</strong>.`,
                `As children, you and your friends were overtaken by undead. <strong>You were the only one to survive</strong>.`,
                `You’ve always taken a piece of those you kill. <strong>Your collection is your pride and joy</strong>.`,
                `<strong>You’ve always found the dead more comforting than the living</strong>. You talk to them.`,
                `All of your family is obsessed with death. <strong>You don’t get it</strong>.`,
            ],
        },
        traits: [
            {
                title: `DIG DUG`,
                descrip: `
                    Your talons are great at digging through most surfaces. <strong>Strength TEST</strong> to dig a tunnel and move in the same round.
                `
            },
            {
                title: `GOUGED OUT`,
                descrip: `
                    After seeing atrocities, you took your own sight. <strong>−2 Presence</strong>. You now see all things hidden with <strong>−4 DR</strong>.  
                `
            },
            {
                title: `DEATH MAGICK `,
                descrip: `
                    You can commune with all that is no longer living. <strong>−2 DR for all magick involving the undead</strong>. 
                `
            },
            {
                title: `REBIRTH`,
                descrip: `
                    <em>Once per day</em>, you can revive someone who has been dead for no more than <strong>d4 days</strong>. <u>Each time you resurrect someone</u>, <strong>permanently reduce Presence by 1</strong>.
                `
            },
            {
                title: `SPEAK WITH THE DEAD`,
                descrip: `
                    <strong>Focus TEST</strong> to commune with the undead as though they were still living. <u>Only you hear what they say</u>.
                `
            },
            {
                title: `RAZOR SHARP`,
                descrip: `
                    You hone the talons on your feet to the sharpest edge. <strong>d8 damage per foot</strong>. 
                `
            },
        ],
        stats: {
            hp: 6,
            favors: 4,
            silver: '1d4x10',
            pp: `[Presence]+d8`,
            strength: 1,
            focus: 1
        },
        gear: {
            weapons: 6,
            armor: `<strong><u>BONE MASK</u></strong>. Go <u>unseen by undead</u>. <em>It is fused to your face</em>. <strong>Take d6 damage if removed</strong>.`,
        },
        extras: [
            `Start with a <strong>Bone Mask</strong>. The magick cast when carving your mask allows you to go <u>unseen by undead</u>. <em>It is fused to your face</em>. <strong>Take d6 damage if removed</strong>.`
        ],
    },
    //NOSNIBOR
    {
        name: 'NOSNIBOR',
        subName: 'Watcher',
        descrip: `
            <strong>Nosnibor</strong> are the oldest recorded species to live in <strong>Kör</strong>. 
            For centuries, they went <strong>unnoticed</strong> with their homes built <strong>high among the stalactites</strong>. 
            They watched new cultures emerge as power shifted with the flow of the lava. 
            It wasn’t until <strong>Rifts started opening</strong> and new people began settling in the depths that the <strong>Nosnibor</strong> made their presence known. 
            Surprisingly, <strong>they had details about everyone from observing for so long</strong>.  
        `,
        details: {
            title: `YOU’VE SEEN THINGS`,
            table: [
                `You know something about a fellow <strong>Marauder</strong> that no one else does, <strong>including them</strong>.`,
                `<strong>You heard the ground above beginning to crack</strong>; you must see the transformation yourself.`,
                `You’ve glimpsed through the <strong>Rifts</strong> and seen other worlds. <strong>You need to distance yourself from what’s coming</strong>.`,
                `<strong>You’ve ventured to the surface</strong> and want nothing more than the fresh, salty air above.`,
                `<strong>SHE</strong> may not be your god, but you’ve seen signs that <strong>her return is imminent</strong>.`,
                `You saw something you shouldn’t have. <strong>Now there’s a bounty on your head</strong>.`,
            ],
        },
        traits: [
            {
                title: `DEATH FROM ABOVE`,
                descrip: `
                    You’ve got membranes going from your wrist to your midsection, <strong>allowing you to glide from great heights</strong>.
                `
            },
            {
                title: `CHROMA CHAMELEON`,
                descrip: `
                    Your skin can blend in with your environment, <strong>making you very difficult to see</strong>.  
                `
            },
            {
                title: `ECHO LOCATOR`,
                descrip: `
                    Without utilizing your vision, <u>you can hear where walls and objects are not</u> with a <strong>Presence DR10 TEST</strong>. 
                `
            },
            {
                title: `DEVIL IN THE DETAILS`,
                descrip: `
                    And you’re the devil. <u>Once per scene</u>, you see the angle to solve a problem or thwart an enemy. <strong>−4 DR for this TEST</strong>.
                `
            },
            {
                title: `CLIMBING CLAWS`,
                descrip: `
                    All of your kind are good at climbing walls, but your claws make it look easy. <u><strong>−3 DR</strong> for climbing surfaces</u>. <strong>d4 damage</strong>.
                `
            },
            {
                title: `SIGHT SEER`,
                descrip: `
                    You are in tune with the arcane. <u>Start each day with your max <strong>Power Points (PP)</strong></u>.
                `
            },
        ],
        stats: {
            hp: 4,
            favors: 4,
            silver: '1d4x10',
            pp: `[Presence]+d4`,
            strength: -1,
            toughness: -1,
            presence: 2,
        },
        gear: {
            weapons: 4,
            armor: 2,
        },
    },
    //REAPER
    {
        name: 'REAPER',
        subName: 'Brooder',
        descrip: `
            <strong>Reapers</strong>, on the trail of the <strong>Greyskrulls</strong>, found their way to <strong>Kör</strong> through a magickal Rift many years ago. 
            The Rift shifted and closed as they were entering this new world. 
            As strangers in a strange land, <strong>the Reapers have made a pact with the Greyskrulls</strong> to leave their conflicts behind on their homeworld. 
            There is a truce between these people, <strong>though Reapers are more inclined to find a way home than accept a life here in Kör</strong>. 
        `,
        details: {
            title: `WHAT YOU WERE`,
            table: [
                `Your god blessed you with healing hands. <strong>Their silence is deafening in Kör</strong>.`,
                `<strong>You were a member of the Reaper council, planning for everyone’s future</strong>. There is no table for you to sit at here.`,
                `You studied under the greatest wizards. <strong>Those incantations hold no power in Kör</strong>.`,
                `You maintained the great halls; you were no one special. <strong>Now’s your chance to be a Champion</strong>.`,
                `A famous warrior admired by many. <strong>You have no adoring fans in this world</strong>.`,
                `<strong>Miserable</strong>. You still are, but now you have to deal with extreme heat too.`,
            ],
        },
        traits: [
            {
                title: `TWO EYES OPEN`,
                descrip: `
                    When one face rests, <em>the other stays awake</em>, <strong>keeping a vigilant watch</strong>.
                `
            },
            {
                title: `MOUTHING OFF`,
                descrip: `
                    Your top head instinctively bites anything that <em>attacks you in close combat</em>. <u>Its attack does not count as an action</u>. <strong>d6 damage</strong>.
                `
            },
            {
                title: `TWO FACED`,
                descrip: `
                    The face in your chest is always focused on your actions, while your head tracks what others are doing. <strong>−1 DR to defend</strong>.
                `
            },
            {
                title: `DOUBLE TIME`,
                descrip: `
                    With two heads to focus, <u>you can use each hand independently every turn</u>, <strong>including an action for both</strong>.
                `
            },
            {
                title: `AMPLE ANTLERS`,
                descrip: `
                    The boney antlers jutting from atop your head are great at puncturing. <strong>2d4 damage</strong>.
                `
            },
            {
                title: `CONTROL FREAK`,
                descrip: `
                    Everything seems out of your control except for when you are manipulating things. <strong>−2 DR for controlling magick</strong>.
                `
            },
        ],
        stats: {
            hp: 6,
            favors: 4,
            silver: '2d4x10',
            pp: `[Presence]+d4`,
            strength: 1,
            toughness: 1,
            focus: -2,
        },
        gear: {
            weapons: 6,
            armor: 4,
        },
    },
];

export const NAMES = [
    `Jozet`,
    `Meciart`,
    `Slavik`,
    `Cibul`,
    `Ulka`,
    `Tibor`,
    `Denko`,
    `Tich`,
    `Uraj`,
    `Rybar`,
    `Banik`,
    `Senid`,
    `Okorn`,
    `Kon`,
    `Skalik`,
    `Trik`,
    `Tesar`,
    `Arik`,
    `Artin`,
    `Kami`,
    `Mila`,
    `Volleb`,
    `Plest`,
    `Trav`,
    `Koci`,
    `Zoral`,
    `Luka`,
    `Novo`,
    `Jaros`,
    `Dagmar`,
    `Ladis`,
    `Bohus`,
    `Chrob`,
    `Medve`,
    `Voka`,
    `Havel`,
    `Dovan`,
    `Mork`,
    `Islav`,
    `Cier`,
    `Deno`,
    `Strand`,
    `Blaze`,
    `Bisk`,
    `Barto`,
    `Tirad`,
    `Enrich`,
    `Jelen`,
]

export const PERSONALITY = [
    `Aggressive`,
    `Irritable`,
    `Defensive`,
    `Hostile`,
    `Sarcastic`,
    `Confident`,
    `Insincere`,
    `Untrustworthy`,
    `Comfortable`,
    `Defiant`,
    `Indecisive`,
    `Resilient`,
    `Crude`,
    `Bitter `,
    `Sneaky`,
    `Spiteful`,
    `Cowardly`,
    `Moody`,
    `Competitive`,
    `Devious`,
];

export const HONOR = [
    `partially flayed skin, leaving your muscles exposed`,
    `an empty eye socket where flies and maggots make their home`,
    `a limp on account of your atrophied leg`,
    `your brain visible through your cracked skull`,
    `a gouge in your lip, constantly streaming drool`,
    `a disfigured hand, missing fingers as ragged stumps where they were bitten off`,
    `an ear dangling from a few threads of flesh`,
    `you torso covered in scar-tissue hash marks`,
    `an extra belly button from a puncture wound`,
    `misplace nipples; ripped off and resewn in the wrong spots`,
    `half of your face ripped off.`,
    'a metal spike that your flesh has mostly grown over, impaled in you years ago',
    `rotting, putrid flesh`,
    `a puss-filled abscess on your leg that constantly leaks`,
    `a hole in your stomach that slowly leaks whenever you drink`,
    `a foot that was cut off and sewn back on crooked`,
    `a scar smile from where your jaw was ripped open`,
    `none of your upper teeth`,
    `your toes gnawed off by rodents in your sleep`,
    `you nose partially ripped off, flapping in the breeze.`,
];

export const IDIO = [
    `greed. You want things and you'll do whatever it takes to get them.`,
    `a know-it-all attitude. You've been there, you've done that, and you tell everyone even if they don't ask.`,
    `a never-say-die outlook. You never back off, ever.`,
    `an incessant tickle in your throat that you're constantly trying to clear.`,
    `you love the taste of [job] flesh. You can't get enough.`,
    `the belief that SHE will spread a parasitic infection upon her return.`,
    `frayed nerves. When below half HP, you can’t stop talking.`,
    `a need to find a way to take a souvenir and cherish these times.`,
    `brain fog. You trail off into a story rather than focus on the task at hand.`,
    `an immaginary friend! One of your items is named Fred. You talk to Fred.`,
    `indecisiveness. You want someone else to make the decision.`,
    `lack of volume control. You don’t know how to speak softly.`,
    `paranoia. Sets in whenever you are not at full HP. Someone is out to get you.`,
    `contrarianism. Everything you do and say is the opposite of how you present yourself.`,
    `pyromania. You love watching things burn. Fire warms your heart.`,
    `ruthlessness. You’ll do whatever it takes to be a Champion even if it harms a fellow Marauder.`,
    `incessant nose picking. Chances are your finger is in your nose right now.`,
    `coprophagia. You love the smell and taste of that which has already been processed.`,
    `a disrespect of personal space. When speaking to anyone, you must be as close as possible to their face.`,
    `a need to cover yourself in thin meat strips whenever possible. Your stench is unyielding.`,
];

export const STARTING_EQUIPMENT = [
    [
        `<strong class="clickable info">Pebble</strong> with a face carved into it.`,
        `<strong class="clickable info">Finger</strong> of someone or <em>something</em>.`,
        `Pouch woven from human hair — holds <strong class="clickable info">3 small-sized items</strong>.`,
        `Backpack sewn from the hide of a loved one — <strong class="clickable info">holds 7 normal-sized items</strong>.`,
        `Hand-drawn sled — <strong class="clickable info">holds 16 normal-sized items</strong>.`,
        `Pack Slug — will carry <strong class="clickable info">18 normal-sized items</strong>, <em>sometimes wanders off</em>.`,
    ],
    [
        `<strong class="clickable info">Heat-resistant</strong> net`,
        `Miniature obsidian carving of <strong class="clickable info">SHE</strong>`,
        `<strong class="clickable info">Climbing spikes</strong>`,
        `25-foot rope of <strong class="clickable info">woven human hair</strong>`,
        `<strong class="clickable info">Urn of Mother’s Mud</strong> (<u>Presence +d6 uses</u>, <em>stops bleeding</em>, <strong>heals d4 HP</strong>)`,
        `<strong class="clickable info">Key carved from an ancient bone</strong>. What it unlocks is unknown.`,
        `Palm-sized <strong class="clickable info">mirror</strong>`,
        `<strong class="clickable info">Restored Relic</strong> - see below`,
        `Pet six-legged <strong class="clickable info">lizard</strong>`,
        `<strong class="clickable info">Mummified human hand</strong> strung up on a necklace`,
        `<strong class="clickable info">Random unbroken Relic</strong> - see below`,
        `<strong class="clickable info">Shovel</strong>`,
    ],
    [
        `<strong class="clickable info">Crudely drawn map</strong> of the surface`,
        `Sack of <strong class="clickable info">unhatched bug eggs</strong> (<strong>d8 days’ worth of food</strong>)`,
        `<strong class="clickable info">Ink and quill</strong>`,
        `<strong class="clickable info">Ancient amulet</strong>, glows in the dark`,
        `<strong class="clickable info">Random unbroken Relic</strong> - see below`,
        `<strong class="clickable info">Mesh hammock</strong>`,
        `<strong class="clickable info">Decapitated human head</strong>, still mutters words occasionally`,
        `<strong class="clickable info">Silver broach of SHE</strong> hatching from the planet`,
        `<strong class="clickable info">Spyglass</strong>`,
        `<strong class="clickable info">Wind instrument</strong> carved from a hollowed-out bone`,
        `<strong class="clickable info">Bottle</strong> of fine Salazarite swill `,
        `<strong class="clickable info">Folded-up drawing</strong> of a Marauder’s siblings`,
    ],
];

export const ARMOR = [
    `<strong class="clickable info">TIER 0</strong> <u>No armor</u>`,
    `<strong class="clickable info">TIER 1</strong> <u>Creature Hide</u>: <strong>−d2 damage</strong>. <em>5s</em>`,
    `<strong class="clickable info">TIER 2</strong> <u>Scorched Leather</u>: <strong>−d4 damage</strong>, +2 DR on Agility tests and defense. <em>10s</em>`,
    `<strong class="clickable info">TIER 3</strong> <u>Bonemail</u>: <strong>−d6 damage</strong>, +4 DR on Agility tests, +2 DR to defend. <em>18s</em>`,
];

export const WEAPONS = [
    `<strong class="clickable info">Fractured Stalactite</strong> (<strong>d4</strong>)`,
    `<strong class="clickable info">Sling</strong> w/ bag of Presence +10 rocks (<strong>d4/rock</strong>)`,
    `<strong class="clickable info">Basilisk Tooth</strong> (<strong>d4</strong>) <em>4s</em>`,
    `<strong class="clickable info">Jagged Obsidian</strong> (<strong>d4</strong>) <em>2s</em>`,
    `<strong class="clickable info">Sword</strong> (<strong>d6</strong>) <em>34s</em>`,
    `<strong class="clickable info">Bone Axe</strong> (<strong>d6</strong>) <em>10s</em>`,
    `<strong class="clickable info">Magick-Charged Shock Prod</strong> (<strong>d8, 1 PP/use</strong>) <em>44s</em>`,
    `<strong class="clickable info">[d4] Explosive Burilli Crystals</strong> (<strong>d6 to d4 targets near each other</strong>) <em>8s each</em>`,
    `<strong class="clickable info">Svärdstav (pole sword)</strong> (<strong>d8</strong>)  <em>25s</em>`,
    `<strong class="clickable info">Marrowgut</strong> (<strong>d10</strong>) <em>20s</em>`,
];