export let suits = [
    {
        symbol: '♥',
        name: 'heart'
    }, {
        symbol: '♦',
        name: 'diamond'
    }, {
        symbol: '♣',
        name: 'club'
    }, {
        symbol: '♠',
        name: 'spade'
    }
];

export let ranks = [
    {
        name: 'ace',
        symbol: 'A'
    }, {
        name: 'two',
        symbol: '2'
    }, {
        name: 'three',
        symbol: '3'
    }, {
        name: 'four',
        symbol: '4'
    }, {
        name: 'five',
        symbol: '5'
    }, {
        name: 'six',
        symbol: '6'
    }, {
        name: 'seven',
        symbol: '7'
    }, {
        name: 'eight',
        symbol: '8'
    }, {
        name: 'nine',
        symbol: '9'
    }, {
        name: 'ten',
        symbol: '10'
    }, {
        name: 'jack',
        symbol: 'J'
    }, {
        name: 'queen',
        symbol: 'Q'
    }, {
        name: 'king',
        symbol: 'K'
    }
];

export let rules = {
  aAndB: {
    name: 'A & B',
    tips: 2231,
    description: 'Player chooses a dare for A & B to participate in'
  },
  forYou: {
    name: 'For You',
    description: 'Player chooses someone to drink on their behalf'
  },
  forMe: {
    name: 'For Me',
    description: 'Player has to drink'
  },
  girlsDrink: {
    name: 'Girls Drink',
    description: 'All girls must drink'
  },
  neverHaveIEver: {
    name: 'Never Have I Ever',
    tips: 2235,
    description: 'Hold up 3 fingers, say something you haven\'t done and whover has done it must drink and put a finger down'
  },
  dicks: {
    name: 'Dicks',
    description: 'All guys must drink'
  },
  heaven: {
    name: 'Heaven',
    description: 'When the player puts up their hand, the last person to follow must drink'
  },
  mate: {
    name: 'Mate',
    description: 'Player chooses a mate that must drink every time the player drinks'
  },
  rhyme: {
    name: 'Rhyme',
    description: 'Player chooses a word in which each player to the left must rhyme with until someone cannot think of a word'
  },
  categories: {
    name: 'Categories',
    tips: 2240,
    description: 'Pick a category of things, then go round the circle and whoever can\'t think of a related thing must drink'
  },
  makeARule: {
    name: 'Make a Rule',
    tips: 2241,
    description: 'Player creates a rule that must be adhered to for the rest of the game'
  },
  questionMaster: {
    name: 'Question Master',
    tips: 2242,
    description: 'Whoever answers the player\'s  question must drink'
  },
  kingsCup: {
    name: 'King\'s Cup',
    description: 'Pour a portion of your drink into the Kings Cup'
  }
};

export let tips = {
  2231: [
    {
      tip: 'A must do a body shot off B',
      rating: 'A'
    },
    {
      tip: 'Swap shirts',
      rating: 'A'
    },
    {
      tip: 'A and B must arm wrestle and the winner must finish their drink',
      rating: 'N'
    }
  ],
  2235: [
    {
      tip: '... had sex in public',
      rating: 'A'
    },
    {
      tip: '... used a sex toy',
      rating: 'A'
    },
    {
      tip: '... travelled overseas',
      rating: 'N'
    },
    {
      tip: '... broken a bone',
      rating: 'N'
    }
  ],
  2240: [
    {
      tip: 'Olympic events',
      rating: 'N'
    },
    {
      tip: 'Alcohol brands',
      rating: 'N'
    }
  ],
  2241: [
    {
      tip: 'Little green man: take an invisible figure off your glass when you drink and place it back when you have finished',
      rating: 'N'
    },
    {
      tip: 'Gentleman\'s Rules: No swearing, no pointing, no first names',
      rating: 'N'
    },
    {
      tip: 'Double Tap: When you place your drink down you must tap it twice',
      rating: 'N'
    }
  ],
  2242: [
    {
      tip: 'What does this card do again?',
      rating: 'N'
    },
    {
      tip: 'What time is it?',
      rating: 'N'
    }
  ]
};
