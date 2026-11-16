// ============================================================
// TRAINING PLAN DATA
// To load a new 30-day block: change id, name, startDate and the
// days below (or paste a new plan as JSON in Settings > Load new plan).
// Dates are calculated from startDate, so day 1 = startDate.
// ============================================================
window.DEFAULT_PLAN = {
  id: "mt-block-1",
  name: "Muay Thai — Block 1",
  startDate: "2026-11-15",

  warmup: {
    title: "Pre–Muay Thai warm-up (5–8 min)",
    items: [
      "Water, walk 2 min, let breathing settle. Wrap hands.",
      "Jump rope 2 min, easy on the balls of your feet (legs day: skip rope, just walk).",
      "Kick days: leg swings front + side ×10 each leg, hip circles ×10 each way, 90/90 switches ×10.",
      "Hands days: arm circles, torso twists, neck rolls ×10 each.",
      "1 slow shadow round at 50% using only today's technique."
    ]
  },
  cooldown: {
    title: "Cool-down (5 min)",
    items: [
      "Couch / kneeling hip flexor stretch — 45 s each side",
      "Pigeon stretch — 45 s each side",
      "Adductor rock-backs ×10",
      "Doorway pec stretch — 30 s each side"
    ]
  },

  weeks: [
    { from: 1, to: 7, title: "Week 1 — Stance and hands" },
    { from: 8, to: 14, title: "Week 2 — Kicks and the teep" },
    { from: 15, to: 21, title: "Week 3 — Knees, elbows, defense" },
    { from: 22, to: 30, title: "Week 4 — Put it together" }
  ],

  // type: "session" | "active" | "rest" | "test"
  days: [
    { day: 1, lift: "Legs", type: "session", title: "Stance and jab", mins: 20,
      note: "Skip the rope in the warm-up — legs are fried.",
      blocks: [
        { name: "Stance (5 min, mirror)", detail: "Feet a bit narrower than shoulder-width, staggered. ~60% weight on back leg. Hands at eyebrows, elbows tucked, chin down. Bounce lightly." },
        { name: "Jab — 3 × 20 slow", detail: "Snap it straight out and back to your face on the same line." },
        { name: "Shadow — 2 × 2 min", detail: "Jab only: in place, step-in jab, jab then step back." }
      ],
      focus: "Jab hand comes straight back to your face. Chin stays down. Don't worry about footwork on tired legs." },

    { day: 2, lift: "Push", type: "session", title: "Cross and the 1-2", mins: 30,
      blocks: [
        { name: "Footwork (5 min)", detail: "Step forward/back/left/right. Lead foot first going forward, back foot first going back. Never cross feet; end every step in stance." },
        { name: "Cross — 3 × 15 slow", detail: "Back heel turns out, back hip rotates, rear shoulder comes up to protect chin." },
        { name: "1-2 — 3 × 20", detail: "Slow, then a little faster." },
        { name: "Shadow — 3 × 2 min", detail: "Jab, cross and 1-2 while moving." }
      ],
      focus: "Back heel turns on every cross. Shoulders are tired from pressing — 60% speed, clean form." },

    { day: 3, lift: "Rest", type: "active", title: "Active rest + baseline video", mins: 25, film: true,
      blocks: [
        { name: "Jump rope — 3 × 2 min", detail: "" },
        { name: "Mobility — 10 min", detail: "Kick-day warm-up list plus the cool-down stretches." },
        { name: "Shadow — 2 × 3 min", detail: "Jab, cross, 1-2 while moving." },
        { name: "Film 1 round (front + side)", detail: "This is your baseline." }
      ],
      focus: "Watch the video for hands dropping and feet getting too wide or crossing." },

    { day: 4, lift: "Pull", type: "session", title: "Hooks and first bag work", mins: 35,
      blocks: [
        { name: "Hooks (3 lead, 4 rear) — 3 × 10 each side", detail: "Elbow at fist height, short arc, turn from the hip and pivot the same-side foot. In the mirror." },
        { name: "Bag — 2 × 3 min at 50%", detail: "Wraps + gloves. Jab and cross only. Jab lands with a slight bend in the elbow." },
        { name: "Shadow — 2 × 3 min", detail: "1, 2, 1-2 and 1-2-3." }
      ],
      focus: "Distance. Step in to hit, step out after — don't drift too close to the bag." },

    { day: 5, lift: "Legs", type: "session", title: "Hands shadow", mins: 20,
      blocks: [
        { name: "Shadow — 3 × 2 min", detail: "Hands only, light footwork." },
        { name: "Round 3: combo then step", detail: "Throw a combo, then take one step to the side." }
      ],
      focus: "Guard stays up in the last 30 seconds of each round, when you're tired." },

    { day: 6, lift: "Rest", type: "rest", title: "Full rest", mins: 0, blocks: [], focus: "Recover." },

    { day: 7, lift: "Push", type: "session", title: "Bag hands", mins: 35,
      blocks: [
        { name: "Bag R1 — 3 min", detail: "Jab only, circling the bag." },
        { name: "Bag R2 — 3 min", detail: "1-2 and 1-2-3." },
        { name: "Bag R3 — 3 min", detail: "Free mix at 70%." },
        { name: "Finisher — 3 × 30 s", detail: "Fast straight punches, 30 s rest." }
      ],
      focus: "Short, sharp exhale on every strike. Hands back to your face after every combo." },

    { day: 8, lift: "Pull", type: "session", title: "Teep and roundhouse intro", mins: 35, kick: true,
      note: "Legs have recovered — first kick day.",
      blocks: [
        { name: "Teep — 3 × 10 each leg, slow", detail: "Knee up first, push the ball of the foot through the target, pull back to stance." },
        { name: "Roundhouse slow-mo — 3 × 8 each side", detail: "Step lead foot out at an angle. Pivot on ball of support foot (heel turns toward target). Turn hip over, swing same-side arm down for balance. Hold end position 2 s." },
        { name: "Shadow — 2 × 3 min", detail: "Punches + teeps." }
      ],
      focus: "Support-foot pivot. If the heel doesn't turn, the hip can't turn over." },

    { day: 9, lift: "Rest", type: "active", title: "Active rest — kick balance", mins: 25,
      blocks: [
        { name: "Jump rope — 3 × 2 min", detail: "" },
        { name: "Kick mobility — 2 rounds", detail: "Leg swings, 90/90, cossack squats." },
        { name: "Roundhouse balance — 3 × 8 each side", detail: "Very slow." },
        { name: "Shadow — 2 × 3 min", detail: "Everything so far." }
      ],
      focus: "Balance. You should be able to stop at any point in the kick without falling." },

    { day: 10, lift: "Legs", type: "session", title: "Hands shadow + slip", mins: 20,
      blocks: [
        { name: "Shadow — 3 × 3 min", detail: "Hands only, with hooks." },
        { name: "Add the slip", detail: "After a jab, move your head slightly outside an imaginary jab, then throw a cross." }
      ],
      focus: "Hooks stay short and tight — no winding up." },

    { day: 11, lift: "Push", type: "session", title: "Kicks on the bag", mins: 35, kick: true,
      note: "Day after legs — kicks at 50%.",
      blocks: [
        { name: "Bag — 2 × 3 min roundhouses", detail: "Both sides, light." },
        { name: "Bag — 2 × 3 min", detail: "Teeps and 1-2." }
      ],
      focus: "Contact with the lower shin, not the foot. Power comes later." },

    { day: 12, lift: "Rest", type: "rest", title: "Full rest", mins: 0, blocks: [], focus: "Recover." },

    { day: 13, lift: "Pull", type: "session", title: "Combos", mins: 40, kick: true,
      blocks: [
        { name: "Bag R1 — 1-2 → rear roundhouse", detail: "" },
        { name: "Bag R2 — Jab → lead teep", detail: "" },
        { name: "Bag R3 — 1-2-3 → rear roundhouse", detail: "The lead hook turns your hips and loads the rear kick." },
        { name: "Bag R4 — Mix them", detail: "" },
        { name: "Finisher — 2 × 1 min", detail: "Alternating roundhouses, moderate power." }
      ],
      focus: "Every combo ends back in stance, guard up, before the next one." },

    { day: 14, lift: "Legs", type: "session", title: "Easy hands shadow", mins: 15,
      blocks: [
        { name: "Shadow — 3 × 2 min", detail: "Hands only — the punch parts of yesterday's combos." },
        { name: "Long cool-down", detail: "Extra time on hips." }
      ],
      focus: "Easy pace, clean form." },

    { day: 15, lift: "Rest", type: "active", title: "Active rest + checks + video", mins: 25, film: true,
      blocks: [
        { name: "Jump rope 3 × 2 min + mobility 10 min", detail: "" },
        { name: "Check — 3 × 10 each leg", detail: "Lift lead shin, knee turned out toward your elbow, hands up." },
        { name: "Shadow — 3 × 3 min", detail: "Everything so far." },
        { name: "Film + compare to Day 3", detail: "" }
      ],
      focus: "Find one thing that improved and one thing to fix this week." },

    { day: 16, lift: "Push", type: "session", title: "Knees and elbows", mins: 35, kick: true,
      blocks: [
        { name: "Straight knee — 3 × 10 each side", detail: "Drive hips forward, rise onto toes of support foot, pull an imaginary head down." },
        { name: "Elbows — 3 × 10 each side", detail: "Horizontal and upward. Very short range, other hand on your face." },
        { name: "Bag — 2 × 3 min close range", detail: "Knees and elbows (gloves on)." },
        { name: "Bag — 2 × 3 min from range", detail: "Everything." }
      ],
      focus: "Knee power comes from the hips moving forward, not from lifting the leg." },

    { day: 17, lift: "Pull", type: "session", title: "Defense → counter", mins: 40, kick: true,
      blocks: [
        { name: "Parry jab → 1-2 (×10)", detail: "" },
        { name: "High guard block → same-side hook (×10)", detail: "" },
        { name: "Check → roundhouse other leg (×10)", detail: "" },
        { name: "Lean back → cross (×10)", detail: "" },
        { name: "Bag — 3 × 3 min at 75%", detail: "1-2-roundhouse, 1-2-knee, check-then-kick." }
      ],
      focus: "Never defend without hitting back. Defense → counter is the habit." },

    { day: 18, lift: "Rest", type: "rest", title: "Full rest", mins: 0, blocks: [], focus: "Recover." },

    { day: 19, lift: "Legs", type: "session", title: "Defense shadow", mins: 20,
      blocks: [
        { name: "Shadow — 3 × 3 min", detail: "Every third action is a defensive move then a counter. Hands only." }
      ],
      focus: "React, don't plan. Imagine the punch coming, then defend." },

    { day: 20, lift: "Push", type: "session", title: "Bag rounds", mins: 40,
      note: "Day after legs — punches and elbows hard, kicks and knees at 50%.",
      blocks: [
        { name: "Bag — 5 × 3 min", detail: "Mix all strikes." },
        { name: "Finisher — 3 × 30 s", detail: "All-out punches, 30 s rest." }
      ],
      focus: "Move around the bag between combos instead of standing still in front of it." },

    { day: 21, lift: "Rest", type: "active", title: "Active rest + video", mins: 25, film: true,
      blocks: [
        { name: "Rope + mobility", detail: "" },
        { name: "Shadow — 3 × 3 min", detail: "" },
        { name: "Film yourself", detail: "" }
      ],
      focus: "Pick your 3–4 favorite combos for week 4." },

    { day: 22, lift: "Pull", type: "session", title: "Go-to combos", mins: 40, kick: true,
      blocks: [
        { name: "Pick 3–4 combos", detail: "e.g. 1-2 → rear roundhouse · Jab → teep · 1-2-3 → rear roundhouse · 1-2 → rear knee" },
        { name: "Bag — 1 round per combo", detail: "" },
        { name: "Bag — final round at 80%", detail: "Mix them." }
      ],
      focus: "Make each combo automatic — no pause between strikes." },

    { day: 23, lift: "Legs", type: "session", title: "Hands shadow", mins: 20,
      blocks: [
        { name: "Shadow — 3 × 2 min", detail: "Hands-only parts of your combos plus defense → counter." }
      ],
      focus: "Stay light — this is recovery work." },

    { day: 24, lift: "Rest", type: "rest", title: "Full rest", mins: 0, blocks: [], focus: "Recover." },

    { day: 25, lift: "Push", type: "session", title: "Power day", mins: 40, kick: true,
      note: "Legs are rested — first full-power kick day.",
      blocks: [
        { name: "Bag — 5 × 3 min", detail: "Final round at full power." },
        { name: "Finisher — 3 × 30 s", detail: "All-out kicks and punches." }
      ],
      focus: "Power with form. If the pivot or guard falls apart, drop back to 80%." },

    { day: 26, lift: "Pull", type: "session", title: "Light technical", mins: 25,
      note: "Test day tomorrow — keep it easy.",
      blocks: [
        { name: "Shadow — 3 × 3 min", detail: "Smooth and technical." },
        { name: "Bag — 2 × 3 min at 60%", detail: "" }
      ],
      focus: "Clean reps, then rest up." },

    { day: 27, lift: "Rest", type: "test", title: "Test day", mins: 40, film: true, kick: true,
      blocks: [
        { name: "Full warm-up", detail: "Rope and kick mobility." },
        { name: "Bag — 5 × 3 min, 1 min rest", detail: "Hands up, form solid the whole time." },
        { name: "Roundhouse + teep both sides", detail: "Clean, balanced, ending in stance each time." },
        { name: "Shadow round", detail: "Every strike plus defense → counter." },
        { name: "Film + compare to Day 3", detail: "" }
      ],
      focus: "Show what 4 weeks built." },

    { day: 28, lift: "Legs", type: "session", title: "Easy shadow", mins: 15,
      blocks: [
        { name: "Shadow — 2 × 3 min easy", detail: "" },
        { name: "Long cool-down", detail: "" }
      ],
      focus: "Recover from the test." },

    { day: 29, lift: "Push", type: "session", title: "Fix your weakest area", mins: 35,
      note: "Day after legs — kicks at 50%.",
      blocks: [
        { name: "Drill weakest skill — 15 min", detail: "Pick it from the test video." },
        { name: "Bag — 4 × 3 min", detail: "" }
      ],
      focus: "Turn your biggest weakness into the next block's priority." },

    { day: 30, lift: "Rest", type: "active", title: "Review + what's next", mins: 20,
      blocks: [
        { name: "Watch all four videos in order", detail: "" },
        { name: "Decide the next block", detail: "Trial class, or repeat weeks 3–4 solo with more rounds and longer combos." }
      ],
      focus: "Plan the next 30." }
  ]
};
