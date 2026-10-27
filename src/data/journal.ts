export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "the-case-for-a-slower-warm-up",
    title: "The case for a slower warm-up",
    description: "A few thoughtful minutes before training can change how the whole session feels. Here is a calmer way to prepare.",
    date: "2026-09-12",
    category: "TRAINING NOTES",
    body: [
      "A warm-up is not a box to tick. It is the point where a busy day begins to make room for movement. Give yourself a few minutes to arrive before asking your body to perform.",
      "Start with easy, continuous motion. A brisk walk, gentle cycle or relaxed jog brings your temperature up without demanding too much too soon. Then add movements that reflect the work ahead: ankle mobility before a run, shoulder circles before an upper-body session.",
      "There is no perfect sequence. The useful one is the one you can repeat, adjust and enjoy. Let the first effort feel like an invitation, not a test."
    ]
  },
  {
    slug: "what-to-wear-for-changing-weather",
    title: "What to wear when the weather changes",
    description: "Simple, practical layering for training through cooler mornings, wind and unpredictable weather.",
    date: "2026-08-28",
    category: "FIELD GUIDE",
    body: [
      "The best training layer works with the forecast, not against it. Think in light, useful pieces that you can adapt as your body warms and conditions change.",
      "A breathable base layer manages comfort close to the skin. Add a wind-resistant layer when the route is exposed, and choose a piece that can be tied around the waist or packed away when you no longer need it.",
      "Fit matters as much as fabric. Look for room through the shoulders and enough length to stay in place, without extra bulk that catches in motion."
    ]
  },
  {
    slug: "a-kit-built-to-repeat",
    title: "A kit built to repeat",
    description: "Why dependable training clothes should feel as natural on a rest day as they do during your hardest session.",
    date: "2026-08-04",
    category: "OUR APPROACH",
    body: [
      "Getting dressed should not be the hardest part of showing up. A small rotation of dependable pieces takes one decision off your mind and makes the habit easier to keep.",
      "We start with comfort, then look at details that earn their place: seams that move with you, storage that stays secure and fabrics that hold their shape after repeated wear.",
      "A good kit does more than perform once. It becomes part of the rhythm — training, recovering, washing, wearing again."
    ]
  }
];

export const getJournalPost = (slug: string) => journalPosts.find((post) => post.slug === slug);
