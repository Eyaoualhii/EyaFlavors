export const posts = [
  {
    slug: 'launch-day-the-new-baking-app-is-here',
    title: 'Welcome to Eya Flavors Where creativity meets sweetness',
    category: ' Eya Website',
    categorySlug: 'website',
    date: 'Feb 22, 2026',
    image: '/images/homepage.jpg',
    imageAlt: 'Delicious cupcakes with frosting',
    excerpt:
      'After months of experimenting, tasting, and perfecting recipes, I’m thrilled to finally share everything with you! Discover over 20 exclusive recipes right here on the website...',
    likes: 0,
    badge: 'New',
    content: `
  <p>After months of experimenting, tasting, and perfecting recipes, I’m thrilled to finally share everything with you! On this website, you'll find over 20 exclusive recipes that you won’t see anywhere else. From classic French pastries to modern fusion desserts, each recipe has been tested (and tasted!) multiple times to make sure it works perfectly in your kitchen.</p>

  <h2>What you’ll find on the website:</h2>
  <ul>
    <li>20+ exclusive recipes with step-by-step instructions and photos</li>
    <li>Tips and tricks to bake like a professional at home</li>
    <li>Seasonal and trending dessert ideas</li>
  </ul>

  <p>I can’t wait for you to explore these recipes, try new flavors, and bake alongside me here on the website. Let’s create something delicious together!</p>
`,
  },

  {
    slug: 'strawberry-cake-fraisier',
    title: 'Perfect Strawberry Cake ',
    category: 'Cakes',
    categorySlug: 'sweet-treats',
    date: 'Feb 22, 2026',
    image: '/images/strawberrycake.JPG', // replace with your image
    imageAlt: 'Strawberry cake with mousseline cream and fresh strawberries',
    excerpt: 'A classic strawberry cake with soft sponge, rich vanilla mousseline cream, and light whipped cream for decoration.',
    likes: 2300,
    badge: 'Popular',
    prepTime: '45 min',
    cookTime: '25 min',
    chillTime: '4 hrs',
    servings: '8–10 slices',
    difficulty: 'Medium',
    ingredients: [
      '5 eggs',
      '5 tablespoons sugar',
      '10 g vanilla sugar',
      '5 tablespoons flour',
      '1 liter milk',
      '400 g butter (room temperature)',
      'Vanilla',
      '8 egg yolks',
      '200 g sugar',
      '100 g cornstarch',
      '100 g water',
      '100 g sugar',
      '300 g heavy cream (30% fat)',
      '30 g powdered sugar'
    ],
    instructions: [
      'For the sponge cake: Whisk eggs, sugar, and vanilla sugar until pale and fluffy.',
      'Gently fold in the flour and bake in a preheated oven at 175°C for about 25 minutes. Let cool completely.',
      'For the mousseline cream: Heat the milk with vanilla.',
      'Whisk egg yolks, sugar, and cornstarch. Pour hot milk over the mixture and cook until thick.',
      'Cool the pastry cream completely, then beat in the butter gradually until smooth and creamy.',
      'For the syrup: Boil water and sugar together, then let cool.',
      'Soak the sponge layers lightly with syrup.',
      'Assemble the cake with mousseline cream and fresh strawberries between layers.',
      'Whip the heavy cream with powdered sugar and use for decoration.',
      'Chill the cake for at least 4 hours before serving.'
    ],
    content: `
    <p>This strawberry cake is elegant, fresh, and perfectly balanced. Soft sponge layers are soaked with syrup, filled with rich vanilla mousseline cream, and finished with light whipped cream.</p>
    <p>A timeless dessert ideal for birthdays, celebrations, and spring gatherings.</p>
  `,
  },
  {
    slug: 'chocolate-chip-cookies-recipe',
    title: 'Chocolate Chip Cookies ',
    category: 'Pastries',
    categorySlug: 'pastries',
    date: 'Feb 22, 2026',
    image: '/images/chocchips.jpg', // replace with your actual image path
    imageAlt: 'Soft and chewy chocolate chip cookies with walnuts',
    excerpt: 'Classic soft and chewy chocolate chip cookies loaded with dark chocolate and walnuts. Perfect for every sweet craving!',
    likes: 1500,
    badge: 'Popular',
    prepTime: '20 min + 2 hrs chilling',
    cookTime: '12 min',
    servings: '20 cookies',
    difficulty: 'Medium',
    ingredients: [
      '275 grams all-purpose flour',
      '230 grams cake flour',
      '2 eggs and 3 egg yolks',
      '115 grams granulated sugar',
      '285 grams brown sugar',
      '1 teaspoon vanilla sugar',
      '1 teaspoon cornstarch',
      '280 grams butter, melted',
      '200 grams dark chocolate, chopped',
      '5 grams salt',
      '50 grams walnuts, chopped'
    ],
    instructions: [
      'In a bowl, whisk together the all-purpose flour, cake flour, cornstarch, and salt. Set aside.',
      'In a separate bowl, add the melted butter. Whisk in the brown sugar, granulated sugar, and vanilla sugar for 1–2 minutes until smooth and paste-like.',
      'Add the eggs and egg yolks, mixing until fully combined.',
      'Gradually fold the dry ingredients into the wet mixture until just combined. Do not overmix.',
      'Fold in the dark chocolate and walnuts with a spatula.',
      'Scoop dough into equal portions (about 20 cookies). Refrigerate for at least 2 hours.',
      'Preheat the oven to 175°C (350°F) and line a baking sheet with parchment paper.',
      'Bake for 12 minutes, until edges are golden and centers are soft and gooey.',
      'Sprinkle with sea salt and allow to cool completely before serving.'
    ],
    content: `
    <p>These chocolate chip cookies are soft, chewy, and loaded with dark chocolate and walnuts. Perfect for sharing or enjoying with a cup of coffee.</p>
    <p>Follow the method carefully to get the perfect balance of gooey centers and crisp edges. Chilling the dough is key for texture!</p>
  `,
  },
  {
    slug: 'madeleines-soft-buttery-recipe',
    title: 'Madeleines Recipe – Soft & Buttery ',
    category: 'Pastries',
    categorySlug: 'pastries',
    date: 'Feb 22, 2026',
    image: '/images/madeleines.jpg', // replace with your actual image path
    imageAlt: 'Golden soft and buttery madeleines',
    excerpt: 'Classic French madeleines: soft, buttery, and lightly lemon-flavored. Perfect with tea or coffee!',
    likes: 664,
    badge: null,
    prepTime: '15 min',
    cookTime: '15 min',
    servings: '12–15 madeleines',
    difficulty: 'Easy',
    ingredients: [
      '3 eggs',
      '70 grams granulated sugar',
      '15 grams vanilla sugar',
      '110 grams butter',
      '150 grams flour',
      '7 grams baking powder',
      'Zest of 1 lemon'
    ],
    instructions: [
      'Melt the butter in a saucepan until lightly browned and fragrant. Set aside to cool.',
      'In a bowl, whisk the eggs, granulated sugar, and vanilla sugar until light and smooth.',
      'Add the lemon zest and mix well.',
      'Sift in the flour and baking powder, then gently fold with a spatula until combined.',
      'Pour in the melted butter and mix until smooth.',
      'Fill your madeleine molds, leaving space for them to rise.',
      'Bake at 175°C (350°F) for about 15 minutes, or until golden.',
      'Let them cool slightly, then enjoy your soft, buttery madeleines!'
    ],
    content: `
    <p>These French madeleines are soft, buttery, and infused with a hint of lemon zest. They’re perfect for an elegant tea time or a cozy dessert at home.</p>
    <p>Follow the steps carefully for that classic hump-shaped top and tender texture that makes madeleines irresistible.</p>
  `,
  },
  {
    slug: 'creme-brulee-recipe',
    title: 'Creme Brulee Recipe ',
    category: 'Pastries',
    categorySlug: 'pastries',
    date: 'Feb 22, 2026',
    image: '/images/cremebrulee.jpg', // replace with your actual image path
    imageAlt: 'Classic creamy crème brûlée with caramelized top',
    excerpt: 'A rich and creamy classic French dessert with a perfectly caramelized sugar topping.',
    likes: 2200,
    badge: 'Popular',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: '4–6 servings',
    difficulty: 'Medium',
    ingredients: [
      '140 ml heavy cream (30%)',
      '140 ml milk',
      '3 egg yolks',
      '50 grams sugar',
      '20 grams vanilla sugar'
    ],
    instructions: [
      'Heat the cream and milk together until it starts to boil, then remove from heat.',
      'In a bowl, whisk the egg yolks, sugar, and vanilla sugar until smooth.',
      'Slowly pour the hot milk mixture into the egg yolks while stirring continuously.',
      'Pour the mixture into small cups or baking pots. Place them in a tray with hot water (water bath).',
      'Bake at 160°C (320°F) for 30 minutes, until set.',
      'Chill in the fridge for 2 hours.',
      'Sprinkle sugar on top and caramelize it with a torch to create a crispy, golden layer.'
    ],
    content: `
    <p>This classic French dessert is creamy, smooth, and topped with a perfectly caramelized sugar crust. Crème brûlée is elegant and surprisingly easy to make at home.</p>
    <p>Using a water bath ensures gentle cooking for a silky texture, and finishing with a torch gives that satisfying crunch on top.</p>
  `,
  },
  {
    slug: 'chewy-chocolate-pistachio-brownies',
    title: 'Chewy Chocolate Brownies with Pistachios ',
    category: 'Pastries',
    categorySlug: 'pastries',
    date: 'Feb 22, 2026',
    image: '/images/brownies.jpg', // replace with your image
    imageAlt: 'Chewy chocolate brownies with shiny top and crunchy pistachios',
    excerpt: 'Perfectly chewy inside with a shiny top and crunchy pistachios. Rich, chocolatey, and irresistible.',
    likes: 1200,
    badge: 'Popular',
    prepTime: '15 min',
    cookTime: '35 min',
    servings: '9–12 brownies',
    difficulty: 'Easy',
    ingredients: [
      '200 g dark chocolate',
      '180 g butter',
      '60 g flour',
      '20 g cornstarch',
      '20 g cocoa powder',
      '3 g baking powder',
      '3 eggs',
      '100 g brown sugar',
      '50 g white sugar',
      '40 g pistachios'
    ],
    instructions: [
      'Melt the dark chocolate and butter together until smooth. Let cool slightly.',
      'In a bowl, whisk the eggs with brown sugar and white sugar until light and glossy.',
      'Add the melted chocolate mixture and mix gently.',
      'Sift together flour, cornstarch, cocoa powder, and baking powder.',
      'Fold the dry ingredients into the batter until just combined.',
      'Pour the batter into a lined baking pan and sprinkle pistachios on top.',
      'Bake at 180°C (350°F) for 35 minutes.',
      'Let cool completely before slicing for perfect chewy brownies.'
    ],
    content: `
    <p>These chocolate pistachio brownies are perfectly chewy on the inside with a shiny crackly top and crunchy pistachios for texture.</p>
    <p>The secret is not overbaking them — let them cool fully to achieve that rich, fudgy bite.</p>
  `,
  },
  {
    slug: 'pistachio-lemon-cheesecake',
    title: 'Pistachio Lemon Cheesecake 🍋',
    category: 'Cakes',
    categorySlug: 'sweet-treats',
    date: 'Feb 22, 2026',
    image: '/images/LemonCheesecake3.jpg', // replace with your image
    imageAlt: 'Creamy pistachio lemon cheesecake with lemon curd topping',
    excerpt: 'A creamy no-bake pistachio cheesecake with a fresh lemon curd topping. Balanced, elegant, and irresistibly smooth.',
    likes: 1100,
    badge: 'Popular',
    prepTime: '30 min',
    cookTime: '10 min (lemon curd)',
    chillTime: '4 hrs',
    servings: '8–10 slices',
    difficulty: 'Medium',
    ingredients: [
      '140 g biscuits',
      '60 g soft butter',
      'A pinch of salt',
      'Lemon zest',
      '390 g heavy cream (30% fat)',
      '300 g cream cheese',
      '250 g mascarpone',
      '80 g powdered sugar',
      '70 g pistachio paste',
      '120 g lemon juice',
      'Zest of 1 lemon',
      '3 eggs',
      '120 g sugar',
      '8 g flour',
      '30 g butter'
    ],
    instructions: [
      'Crush the biscuits finely and mix with soft butter, salt, and lemon zest.',
      'Press the mixture into the base of a lined springform pan. Chill for 20 minutes.',
      'Whip the heavy cream to soft peaks and set aside.',
      'In a bowl, mix cream cheese, mascarpone, powdered sugar, and pistachio paste until smooth.',
      'Gently fold in the whipped cream to obtain a light pistachio cream.',
      'Pour the pistachio filling over the chilled biscuit base and smooth the top.',
      'For the lemon curd, whisk lemon juice, zest, eggs, sugar, and flour in a saucepan.',
      'Cook over low heat, stirring constantly, until thickened.',
      'Remove from heat and mix in the butter.',
      'Let the lemon curd cool slightly, then spread it over the cheesecake.',
      'Refrigerate for at least 4 hours before serving.'
    ],
    content: `
    <p>This pistachio lemon cheesecake is creamy, fresh, and perfectly balanced between nutty pistachio and bright lemon.</p>
    <p>The crunchy biscuit base, silky pistachio filling, and tangy lemon curd topping make it an elegant dessert for any occasion.</p>
  `,
  },
  {
    slug: 'easy-homemade-tiramisu',
    title: 'Easy Homemade Tiramisu ',
    category: 'Pastries',
    categorySlug: 'pastries',
    date: 'Feb 22, 2026',
    image: '/images/tiramisu.jpg', // replace with your image
    imageAlt: 'Creamy homemade tiramisu dusted with cocoa powder',
    excerpt: 'Ultra-creamy homemade tiramisu with rich coffee flavor and a light mascarpone cream. Perfect for coffee lovers!',
    likes: 3500,
    badge: 'Popular',
    prepTime: '25 min',
    cookTime: '5 min',
    chillTime: '4 hrs',
    servings: '8–10 servings',
    difficulty: 'Easy',
    ingredients: [
      '6 egg yolks',
      '165 g sugar',
      '250 g mascarpone',
      '435 g heavy cream',
      '350 g ladyfingers',
      'Strong coffee',
      'Cocoa powder for dusting'
    ],
    instructions: [
      'Whisk the egg yolks with sugar over gentle heat until pale and slightly thickened.',
      'In a separate bowl, whip the heavy cream with mascarpone until smooth and creamy.',
      'Gently fold the mascarpone cream into the yolk mixture.',
      'Quickly dip the ladyfingers into the coffee and arrange them in a dish.',
      'Spread a layer of cream over the soaked ladyfingers.',
      'Repeat layers if desired and finish with a generous dusting of cocoa powder.',
      'Refrigerate for at least 4 hours before serving for best texture.'
    ],
    content: `
    <p>This easy homemade tiramisu is incredibly creamy, light, and full of coffee flavor. A timeless Italian-inspired dessert that never fails.</p>
    <p>Perfect for dinner parties, special occasions, or whenever you crave a coffee-infused treat.</p>
  `,
  },
  {
    slug: 'lemon-ganache-recipe',
    title: 'Lemon Ganache ',
    category: 'Ganache',
    categorySlug: 'sweet-ganache',
    date: 'Feb 22, 2026',
    image: '/images/lemonganache2.jpg',
    imageAlt: 'Smooth lemon white chocolate ganache',
    excerpt: 'A silky lemon ganache made with white chocolate—fresh, creamy, and perfect for cakes, tarts, and desserts.',
    likes: 2600,
    badge: 'Popular',
    prepTime: '15 min',
    cookTime: '5 min',
    chillTime: '4 hrs',
    servings: 'Fills one cake or tart',
    difficulty: 'Medium',
    ingredients: [
      '195 g white chocolate',
      '225 g heavy cream (30% fat), heated',
      '150 g cold heavy cream (30% fat)',
      '75 g fresh lemon juice',
      '2 gelatin sheets (soaked in cold water)'
    ],
    instructions: [
      'Soak the gelatin sheets in cold water until softened.',
      'Melt the white chocolate gently and place it in a tall mixing container.',
      'Heat the first portion of heavy cream (225 g) until hot, then add the softened gelatin and mix to dissolve.',
      'Pour the hot cream over the white chocolate in 2–3 additions, emulsifying with a spatula or hand blender.',
      'Add the fresh lemon juice and blend until smooth.',
      'Pour in the cold heavy cream (150 g) and blend again until fully incorporated.',
      'Cover with plastic wrap touching the surface and refrigerate for at least 4 hours.',
      'Whip lightly before use if needed for a fluffy texture.'
    ],
    content: `
    <p>This lemon ganache is smooth, creamy, and perfectly balanced between sweetness and citrus freshness.</p>
    <p>Ideal for layering cakes, filling tarts, or piping elegant dessert finishes.</p>
  `,
  },
  {
    slug: 'pistachio-mousseline-cream',
    title: 'Pistachio Mousseline Cream',
    category: 'Pastries',
    categorySlug: 'pastries',
    date: 'Feb 22, 2026',
    image: '/images/pistachiomousseline.jpg', // replace with your image
    imageAlt: 'Smooth pistachio mousseline cream in a bowl',
    excerpt: 'A rich and creamy pistachio mousseline, perfect for filling cakes, tarts, or pastries.',
    likes: 1200,
    badge: 'New',
    prepTime: '20 min',
    cookTime: '15 min',
    chillTime: '2 hrs',
    servings: 'Enough to fill 1 cake',
    difficulty: 'Medium',
    ingredients: [
      '650 ml milk',
      '3 egg yolks',
      '100 g granulated sugar',
      '100 g cornstarch',
      '14 g vanilla sugar',
      '300 g butter',
      '150 g pistachio praline paste'
    ],
    instructions: [
      'Heat the milk in a saucepan until it begins to simmer.',
      'In a separate bowl, whisk egg yolks, sugar, cornstarch, and vanilla sugar until smooth.',
      'Slowly pour the hot milk into the egg mixture while whisking continuously to temper the eggs.',
      'Return the mixture to the saucepan and cook over medium heat until thickened, stirring constantly.',
      'Remove from heat and let it cool in the fridge for 2 hours.',
      'Beat in the butter piece by piece until the cream is smooth and silky.',
      'Fold in the pistachio praline paste until fully incorporated.',
      'Your cream is ready to use as a filling for cakes or pastries.'
    ],
    content: `
    <p>This pistachio mousseline cream is smooth, rich, and delicately flavored. Perfect for filling layer cakes, tarts, or choux pastries, it brings a luxurious nutty taste and creamy texture.</p>
    <p>Use it as a filling or layer in your favorite desserts to elevate them to pâtisserie-level elegance.</p>
  `,
  },
  {
    slug: 'dark-chocolate-ganache',
    title: 'Dark Chocolate Ganache',
    category: 'Ganache',
    categorySlug: 'sweet-ganache',
    date: 'Feb 22, 2026',
    image: '/images/darkchganache.jpg', // replace with your image
    imageAlt: 'Rich dark chocolate ganache in a bowl',
    excerpt: 'A silky, rich dark chocolate ganache perfect for frosting, filling, or glazing cakes and pastries.',
    likes: 980,
    badge: 'New',
    prepTime: '10 min',
    cookTime: '5 min',
    chillTime: '1 hr',
    servings: 'Enough for 1 cake',
    difficulty: 'Easy',
    ingredients: [
      '233 g dark chocolate',
      '233 ml cream (30% milk fat)',
      'Gelatin (optional, for stability)'
    ],
    instructions: [
      'Chop the dark chocolate and place it in a heatproof bowl.',
      'Heat the cream in a saucepan until it just begins to simmer.',
      'Pour the hot cream over the chocolate and let it sit for 1–2 minutes.',
      'Stir gently until the chocolate is fully melted and smooth.',
      'If using gelatin, bloom it in cold water and then stir into the warm ganache for stability.',
      'Let the ganache cool slightly before using as a glaze, filling, or frosting.',
      'Refrigerate if needed to thicken further before spreading or piping.'
    ],
    content: `
    <p>This dark chocolate ganache is smooth, glossy, and luxuriously rich. Use it to frost cakes, fill pastries, or as a decadent glaze.</p>
    <p>Adding a little gelatin makes it more stable for piping or layered desserts.</p>
  `,
  },
  {
    slug: 'white-chocolate-ganache',
    title: 'White Chocolate Ganache',
    category: 'Ganache',
    categorySlug: 'sweet-ganache',
    date: 'Feb 22, 2026',
    image: '/images/whitechocolatecupcakes.jpg', // replace with your image
    imageAlt: 'Smooth white chocolate ganache in a bowl',
    excerpt: 'A silky, creamy white chocolate ganache perfect for frosting, filling, or glazing desserts.',
    likes: 100,
    badge: 'New',
    prepTime: '10 min',
    cookTime: '5 min',
    chillTime: '1 hr',
    servings: 'Enough for 1 cake',
    difficulty: 'Easy',
    ingredients: [
      '233 g white chocolate',
      '233 g hot cream',
      '233 g cold cream',
      'Gelatin'
    ],
    instructions: [
      'Chop the white chocolate and place it in a heatproof bowl.',
      'Heat the hot cream until it begins to simmer, then pour over the chocolate. Let sit for 1–2 minutes.',
      'Stir gently until smooth and fully combined.',
      'Bloom gelatin in cold water and stir it into the warm ganache for stability.',
      'Add the cold cream gradually and mix until incorporated for a smooth texture.',
      'Refrigerate for at least 2 hours before spreading or piping.'
    ],
    content: `
    <p>This white chocolate ganache is creamy, smooth, and perfect for elegant desserts. It works beautifully as a glaze, cake filling, or frosting.</p>
    <p>Using gelatin makes it stable for piping or layered creations.</p>
  `,
  },
  {
    slug: 'lemon-cake',
    title: 'Lemon Cake with Lemon Frosting',
    category: 'Cakes',
    categorySlug: 'sweet-treats',
    date: 'Feb 22, 2026',
    image: '/images/lemoncake.jpg', // replace with your image
    imageAlt: 'Moist lemon cake with lemon frosting',
    excerpt: 'A moist and zesty lemon cake topped with a light, tangy lemon frosting.',
    likes: 1100,
    badge: 'New',
    prepTime: '20 min',
    cookTime: '35 min',
    chillTime: '30 min',
    servings: '8–10 slices',
    difficulty: 'Medium',
    ingredients: [
      '150 g sugar',
      '14 g vanilla sugar or vanilla extract',
      '45 ml lemon zest',
      '165 g butter',
      '45 ml oil',
      '4 eggs',
      '45 ml lemon juice',
      '300 g flour',
      'Baking powder',
      '180 ml milk',
      'For Frosting: 120 g powdered sugar, 2 tsp lemon juice, 4 tsp milk'
    ],
    instructions: [
      'Preheat the oven to 175°C (350°F).',
      'In a bowl, cream together butter, sugar, and vanilla until smooth.',
      'Add oil than eggs one at a time, mixing well after each addition.',
      'Stir in lemon zest and lemon juice.',
      'Gradually fold in flour and baking powder alternately with milk until smooth.',
      'Pour the batter into the prepared pan and bake for 30–35 minutes.',
      'Let the cake cool completely before frosting.',
      'For the frosting, mix powdered sugar, lemon juice, and milk until smooth.',
      'Spread the frosting evenly over the cooled cake.',
      'Serve and enjoy your zesty lemon cake!'
    ],
    content: `
    <p>This lemon cake is perfectly moist and bursting with citrus flavor. The light lemon frosting adds a sweet and tangy finish, making it ideal for birthdays, tea time, or any celebration.</p>
  `,
  },
  {
    slug: 'chocolate-caramel-ganache',
    title: 'Chocolate Caramel Ganache',
    category: 'Ganache',
    categorySlug: 'sweet-ganache',
    date: 'Feb 22, 2026',
    image: '/images/ChocolateCaramel.jpg', // replace with your image
    imageAlt: 'Rich chocolate caramel ganache in a bowl',
    excerpt: 'A luscious chocolate caramel ganache perfect for filling, frosting, or glazing cakes and pastries.',
    likes: 1250,
    badge: 'New',
    prepTime: '15 min',
    cookTime: '10 min',
    chillTime: '1 hr',
    servings: 'Enough for 1–2 cakes',
    difficulty: 'Medium',
    ingredients: [
      '40 cl light cream',
      '375 g heavy cream',
      '200 g dark chocolate',
      '200 g sugar',
      '140 g butter'
    ],
    instructions: [
      'In a saucepan, heat the light and heavy cream together until simmering.',
      'In a separate pan, melt the sugar gently until it becomes a golden caramel.',
      'Carefully stir in butter until incorporated than pour the hot cream into the caramel, stirring constantly to combine.',
      'Remove from heat and add the dark chocolate and stir until fully melted and smooth.',
      'Let the ganache cool slightly before using as a glaze, filling, or frosting.',
      'Refrigerate for 2 hours if you need a thick consistency before spreading or piping.'
    ],
    content: `
    <p>This chocolate caramel ganache is decadent and silky, combining the deep richness of dark chocolate with the sweet, buttery flavor of caramel. Perfect for elevating cakes, tarts, and pastries.</p>
  `,
  },
  {
    slug: 'no-bake-lotus-cheesecake',
    title: 'No-Bake Lotus Cheesecake',
    category: 'Cakes',
    categorySlug: 'sweet-treats',
    date: 'Feb 22, 2026',
    image: '/images/lotus.jpg', // replace with your image
    imageAlt: 'No-bake Lotus Biscoff cheesecake with creamy topping',
    excerpt: 'A creamy, no-bake cheesecake made with Lotus Biscoff biscuits, mascarpone, cream cheese, and a luscious Biscoff cream topping.',
    likes: 1350,
    badge: 'New',
    prepTime: '25 min',
    cookTime: '0 min (no bake)',
    chillTime: '4 hrs',
    servings: '8–10 slices',
    difficulty: 'Medium',
    ingredients: [
      '250 g Lotus Biscoff biscuits',
      '85 g butter',
      '250 g mascarpone',
      '350 g cream cheese',
      '50 g Biscoff cream',
      '235 ml heavy whipping cream',
      '85 g powdered sugar',
      '50 g melted Lotus Biscoff cream (for decoration)',
      'Gelatin (optional, for stability)'
    ],
    instructions: [
      'Crush the Lotus Biscoff biscuits and mix with melted butter to form the base.',
      'Press the mixture firmly into the bottom of a springform pan and refrigerate to set.',
      'In a bowl, combine mascarpone, cream cheese, and Biscoff cream until smooth.',
      'Whip the heavy cream with powdered sugar to soft peaks and fold into the cheese mixture.',
      'If using gelatin, bloom it in cold water and mix into the cheese filling for stability.',
      'Pour the filling over the prepared biscuit base and smooth the top.',
      'Refrigerate for at least 4 hours or until set.',
      'Decorate with melted Lotus Biscoff cream before serving.',
      'Slice and enjoy this indulgent, creamy no-bake cheesecake!'
    ],
    content: `
    <p>This no-bake Lotus Biscoff cheesecake is creamy, indulgent, and full of caramelized biscuit flavor. Perfect for dessert lovers and a show-stopping addition to any celebration.</p>
  `,
  },
  {
    slug: 'marble-cake',
    title: 'Classic Marble Cake',
    category: 'Cakes',
    categorySlug: 'sweet-treats',
    date: 'Feb 22, 2026',
    image: '/images/marblecake.jpg', // replace with your image
    imageAlt: 'Swirled marble cake with chocolate and vanilla layers',
    excerpt: 'A classic marble cake with beautifully swirled vanilla and chocolate layers, soft and moist.',
    likes: 1450,
    badge: 'New',
    prepTime: '20 min',
    cookTime: '40 min',
    chillTime: '0 min',
    servings: '8–10 slices',
    difficulty: 'Medium',
    ingredients: [
      '4 eggs',
      '200 g sugar',
      'Vanilla sugar',
      '220 ml vegetable oil',
      '220 ml milk',
      '20 g cocoa powder',
      '15 g baking powder',
      '250 g flour'
    ],
    instructions: [
      'Preheat the oven to 175°C (350°F) and grease a cake pan.',
      'In a bowl, whisk eggs, sugar, and vanilla sugar until light and fluffy.',
      'Gradually add vegetable oil and milk, mixing until combined.',
      'Sift together flour and baking powder, then fold into the wet mixture.',
      'Divide a portion of the batter and mix with cocoa powder to make the chocolate batter.',
      'Alternate spoonfuls of vanilla and chocolate batter into the cake pan.',
      'Swirl gently with a skewer or knife to create a marble effect.',
      'Bake for 35–40 minutes or until a toothpick comes out clean.',
      'Let cool completely before slicing and serving.'
    ],
    content: `
    <p>This marble cake is a classic treat with soft, moist layers of vanilla and chocolate swirls. Perfect for teatime, birthdays, or any occasion that calls for a beautiful homemade cake.</p>
  `,
  },
  {
    slug: 'peanut-praline',
    title: 'Peanut Praliné',
    category: 'Praline',
    categorySlug: 'sweet-praline',
    date: 'Feb 22, 2026',
    image: '/images/peanutpraline.jpg', // replace with your image
    imageAlt: 'Crunchy homemade peanut praliné',
    excerpt: 'A simple and delicious peanut praliné made from roasted peanuts and sugar, perfect for adding crunch to desserts.',
    likes: 980,
    badge: 'New',
    prepTime: '10 min',
    cookTime: '15 min',
    chillTime: '0 min',
    servings: 'About 200 g',
    difficulty: 'Easy',
    ingredients: [
      '200 g roasted peanuts (roasted at 170°C for 15 minutes)',
      '120 g sugar'
    ],
    instructions: [
      'Preheat oven to 170°C and roast the peanuts for 15 minutes until golden and fragrant.',
      'In a saucepan, melt the sugar gently over medium heat until it caramelizes to a golden brown.',
      'Add the roasted peanuts to the caramel and stir quickly to coat evenly.',
      'Pour the mixture onto a parchment-lined tray and spread thinly.',
      'Let cool completely, then break into pieces or pulse in a food processor for a finer texture.',
      'Store in an airtight container for up to 2 weeks.'
    ],
    content: `
    <p>This peanut praliné is crunchy, sweet, and full of roasted peanut flavor. Use it as a topping for cakes, mousses, ice creams, or enjoy it as a snack on its own.</p>
  `,
  },
  {
    slug: 'hazelnut-praline',
    title: 'Hazelnut Praliné',
    category: 'Praline',
    categorySlug: 'sweet-praline',
    date: 'Feb 22, 2026',
    image: '/images/hazulnutpraline.jpg', // replace with your image
    imageAlt: 'Crunchy homemade hazelnut praliné',
    excerpt: 'A rich and crunchy hazelnut praliné made from roasted hazelnuts, caramelized sugar, and a pinch of salt, perfect for desserts.',
    likes: 870,
    badge: 'New',
    prepTime: '10 min',
    cookTime: '15 min',
    chillTime: '0 min',
    servings: 'About 400 g',
    difficulty: 'Easy',
    ingredients: [
      '300 g roasted hazelnuts (roasted at 170°C for 15 minutes)',
      '210 g sugar',
      'Pinch of salt'
    ],
    instructions: [
      'Preheat oven to 170°C and roast the hazelnuts for 15 minutes until fragrant and slightly golden.',
      'In a saucepan, melt the sugar over medium heat until it turns golden brown.',
      'Add the roasted hazelnuts and a pinch of salt to the caramel and stir quickly to coat evenly.',
      'Pour the mixture onto a parchment-lined tray and spread thinly.',
      'Let it cool completely, then break into pieces or pulse in a food processor for a finer texture.',
      'Store in an airtight container for up to 2 weeks.'
    ],
    content: `
    <p>This hazelnut praliné is perfectly crunchy and flavorful, ideal as a topping for cakes, mousses, chocolates, or simply enjoyed on its own as a sweet snack.</p>
  `,
  },
  {
    slug: 'lemon-meringue-buche',
    title: 'Lemon Meringue Buche ',
    category: 'Buche',
    categorySlug: 'buche',
    date: 'Feb 22, 2026',
    image: '/images/buchelemon.jpg',
    imageAlt: 'Elegant lemon meringue dessert with Italian meringue',
    excerpt: 'An elegant lemon dessert with whipped lemon ganache, lemon confit, lemon crémeux, madeleine sponge, and Italian meringue.',
    likes: 1500,
    badge: 'Popular',
    prepTime: '1 hr',
    cookTime: '20 min',
    chillTime: '6 hrs',
    servings: '8–10 portions',
    difficulty: 'Advanced',

    ingredients: [
      'LEMON WHIPPED GANACHE',  // section title
      '195 g white chocolate',
      '225 g heavy cream (hot)',
      '150 g heavy cream (cold)',
      '75 g lemon juice',
      '1.5 gelatin sheets',

      'LEMON CONFIT',
      '200 g lemon segments (supremes)',
      '50 g sugar',
      '30 g sugar + 6 g pectin',

      'LEMON CREMEUX',
      '100 g lemon juice',
      '2 eggs',
      '100 g sugar',
      '8 g flour',
      '30 g butter',

      'MADELEINE SPONGE CAKE',
      '2 eggs',
      '120 g sugar',
      '125 g flour',
      '4 g baking powder',
      '75 ml olive oil',
      '50 g melted butter',
      'Juice of 0.5 lemon',

      'ITALIAN MERINGUE',
      '2 egg whites',
      '120 g sugar',
      '25 g water'
    ],

    instructions: [
      'Lemon Whipped Ganache: Soak gelatin in cold water, melt chocolate, dissolve gelatin in hot cream, pour over chocolate, add lemon juice and cold cream, refrigerate 6 hrs, whip before use.',
      'Lemon Confit: Heat lemon segments with 50 g sugar, add remaining sugar + pectin, boil 1–2 min, cool completely.',
      'Lemon Cremeux: Whisk eggs, sugar, flour, add lemon juice, cook until thick, add butter, blend and chill.',
      'Madeleine Sponge Cake: Whisk eggs and sugar, add oil, butter, lemon juice, fold in flour + baking powder, bake 170 degrees Celsius 20 min, cool.',
      'Italian Meringue: Cook sugar + water to 118 degrees Celsius, whip egg whites, pour syrup slowly, whip until glossy and cool.',
      'Assembly: Cut sponge to mold, layer sponge, cremeux, confit, whipped ganache, top with Italian meringue, torch lightly, chill.'
    ],

    content: `
    <p>This lemon meringue buche is fresh, balanced, and refined. Each layer brings a different texture, making it a true pâtisserie-style creation perfect for celebrations or premium featured posts.</p>
  `,
  },
  {
    slug: 'soft-peanut-biscuit-peanut-crunch',
    title: 'Soft Peanut Biscuit with Peanut Crunch',
    category: 'Pastries',
    categorySlug: 'pastries',
    date: 'Feb 22, 2026',
    image: '/images/softpeanutbiscuit.jpg', // replace with your image
    imageAlt: 'Soft peanut biscuit topped with peanut crunch',
    excerpt: 'A light and airy peanut biscuit paired with a crunchy peanut topping for extra texture and flavor.',
    likes: 1200,
    badge: 'Popular',
    prepTime: '25 min',
    cookTime: '15 min',
    chillTime: '0 min',
    servings: '8–10 biscuits',
    difficulty: 'Medium',
    ingredients: [
      'Soft Peanut Biscuit:',
      '2 eggs',
      '80 g powdered sugar',
      '80 g peanut powder',
      '30 g flour',
      '2 egg whites',
      '20 g sugar',
      '20 g melted butter',
      'Peanut Crunch:',
      '25 g milk chocolate',
      '80 g peanut praline',
      '45 g crispy wafer flakes'
    ],
    instructions: [
      'For the Soft Peanut Biscuit: Preheat oven to 175°C.',
      'Whisk the eggs with powdered sugar until light and fluffy.',
      'Add peanut powder and flour, mixing gently.',
      'Whip the egg whites with sugar until stiff peaks form, then fold into the batter.',
      'Fold in melted butter carefully, maintaining airiness.',
      'Pipe or spread batter onto a baking tray lined with parchment paper and bake for 12–15 minutes. Let cool.',
      'For the Peanut Crunch: Melt the milk chocolate.',
      'Mix melted chocolate with peanut praline and crispy wafer flakes.',
      'Spread or pipe the crunch over the cooled peanut biscuit.'
    ],
    content: `
    <p>This soft peanut biscuit paired with a crunchy peanut topping creates a perfect balance of textures. Ideal for layering in cakes, desserts, or enjoying as a standalone treat.</p>
  `,
  },
  {
    slug: 'pistachio-raspberry-buche',
    title: 'Pistachio Raspberry Buche',
    category: 'Buche',
    categorySlug: 'buche',
    date: 'Feb 22, 2026',
    image: '/images/pistachioraspberrybuche.jpg', // replace with your image
    imageAlt: 'Pistachio raspberry buche with ganache and praline',
    excerpt: 'A luxurious pistachio and raspberry buche with layers of ganache, bavarian cream, strawberry confit, and crunchy pistachio praline.',
    likes: 6300,
    badge: 'Popular',
    prepTime: '8 hr',
    cookTime: '10 min',
    chillTime: '6 hrs',
    servings: '+15 slices',
    difficulty: 'Advanced',
    ingredients: [
      'Pistachio Whipped Ganache: 65 g white chocolate, 40 g pistachio paste, 145 g hot cream (30% fat), 150 g cold cream (30% fat), 1 gelatin sheet',
      'Pistachio Praliné: 200 g pistachios (roasted at 160°C for 15 min), 100 g sugar, pinch of fleur de sel',
      'Red Fruit Confit: 250 g strawberries, 35 g sugar, 2 g pectin + 20 g sugar',
      'Pistachio Bavarian Mousse: 250 g milk, 30 g pistachio paste, 89 g egg yolks, 50 g sugar, 250 g heavy cream (30% fat), 2 gelatin sheets',
      'Pistachio Praliné Crunch: 25 g white chocolate, 80 g pistachio praliné paste, 45 g crêpes dentelle',
      'Pistachio Ladyfinger Sponge: 3 egg whites, 80 g sugar, 3 egg yolks, 20 g pistachio paste, 60 g flour'
    ],
    instructions: [
      'For the ganache: Soak gelatin, melt white chocolate, mix with pistachio paste and hot cream, add cold cream, chill 6 hours, whip before use.',
      'For the praliné: Caramelize sugar, mix in roasted pistachios and fleur de sel, cool and crush.',
      'For the fruit confit: Heat strawberries with sugar, add pectin + sugar mixture, boil 1–2 min, cool completely.',
      'For the bavarian mousse: Soak gelatin, heat milk and pistachio paste, whisk egg yolks with sugar, temper with hot milk, cook until thick, add gelatin, fold in whipped cream.',
      'For the praliné crunch: Melt white chocolate, mix with pistachio pralin paste and crispy wafer flakes.',
      'For the sponge: Whip egg whites with sugar until stiff, fold in egg yolks and pistachio paste, fold in flour, bake at 210°C for 8–10 min, cool completely.',
      'Assembly: Cut sponge to fit mold, layer sponge, bavarian mousse, strawberry confit, ganache, and praliné crunch, chill until firm, decorate, serve chilled.'
    ],
    content: `
    <p>This Pistachio Raspberry Buche combines nutty pistachio flavors with tart strawberries, creamy ganache, and crunchy praline for an elegant, pâtisserie-style dessert. Perfect for celebrations or premium featured posts.</p>
  `,
  }
]

export const categories = [
  { name: 'Recipes', slug: 'recipes', count: 0 },
  { name: 'Pastries', slug: 'pastries', count: 100 },
  { name: 'Buche', slug: 'buche', count: 18 },
  { name: 'Cakes', slug: 'sweet-treats', count: 15 },
  { name: 'Ganache', slug: 'sweet-ganache', count: 3 },
  { name: 'Praline', slug: 'sweet-praline', count: 2 },
  { name: 'News & Media', slug: 'news', count: 0 }
]
