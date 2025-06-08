var quotes = [
    { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { content: "So many books, so little time.", author: "Frank Zappa" },
    { content: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { content: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { content: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { content: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { content: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { content: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
    { content: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { content: "To live is the rarest thing in the world. Most people just exist.", author: "Oscar Wilde" },
    { content: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
    { content: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
    { content: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", author: "Marilyn Monroe" },
    { content: "It is better to be hated for what you are than loved for what you are not.", author: "André Gide" },
    { content: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
    { content: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling" },
    { content: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling" },
    { content: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
    { content: "I am so clever that sometimes I don't understand a single word of what I am saying.", author: "Oscar Wilde" },
    { content: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us dragons can be beaten.", author: "Neil Gaiman" },
    { content: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare" },
    { content: "Life is what happens to us while we are making other plans.", author: "Allen Saunders" },
    { content: "The only way to get rid of a temptation is to yield to it.", author: "Oscar Wilde" },
    { content: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" },
    { content: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { content: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    { content: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { content: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { content: "I can resist everything except temptation.", author: "Oscar Wilde" },
    { content: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { content: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { content: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { content: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { content: "Love the life you live. Live the life you love.", author: "Bob Marley" },
    { content: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { content: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { content: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { content: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { content: "The unexamined life is not worth living.", author: "Socrates" },
    { content: "It is never too late to be what you might have been.", author: "George Eliot" },
    { content: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { content: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
    { content: "The best way to predict your future is to create it.", author: "Peter Drucker" },
    { content: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { content: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { content: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
    { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { content: "Challenges are what make life interesting; overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { content: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { content: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { content: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
    { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { content: "When the going gets tough, the tough get going.", author: "Joseph P. Kennedy" },
    { content: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
    { content: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { content: "The best revenge is massive success.", author: "Frank Sinatra" },
    { content: "Life is like riding a bicycle. To keep your balance you must keep moving.", author: "Albert Einstein" },
    { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { content: "Act as if what you do makes a difference. It does.", author: "William James" },
    { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { content: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { content: "What we think, we become.", author: "Buddha" },
    { content: "Dreaming, after all, is a form of planning.", author: "Gloria Steinem" },
    { content: "Keep your eyes on the stars and your feet on the ground.", author: "Theodore Roosevelt" },
    { content: "What you do speaks so loudly that I cannot hear what you say.", author: "Ralph Waldo Emerson" },
    { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { content: "Go confidently in the direction of your dreams! Live the life you've imagined.", author: "Henry David Thoreau" },
    { content: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { content: "If opportunity doesn't knock, build a door.", author: "Milton Berle" },
    { content: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { content: "Only those who will risk going too far can possibly find out how far one can go.", author: "T.S. Eliot" },
    { content: "Don't wish it were easier. Wish you were better.", author: "Jim Rohn" },
    { content: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
    { content: "A goal is a dream with a deadline.", author: "Napoleon Hill" },
    { content: "You can't go back and change the beginning, but you can start where you are and change the ending.", author: "C.S. Lewis" },
    { content: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { content: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { content: "Try not to become a man of success, but rather try to become a man of value.", author: "Albert Einstein" },
    { content: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { content: "Do what you think cannot be done.", author: "Eleanor Roosevelt" },
    { content: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { content: "Everything has its beauty, but not everyone sees it.", author: "Confucius" },
    { content: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { content: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { content: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
    { content: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
    { content: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { content: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { content: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { content: "The only thing worse than being blind is having sight but no vision.", author: "Helen Keller" },
    { content: "A creative man is motivated by the desire to achieve, not by the desire to beat others.", author: "Ayn Rand" },
    { content: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
    { content: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { content: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", author: "Aristotle" },
    { content: "Quality is not an act, it is a habit.", author: "Aristotle" },
    { content: "Everything is hard before it is easy.", author: "Goethe" },
    { content: "Be kind whenever possible. It is always possible.", author: "Dalai Lama" },
    { content: "All that we are is the result of what we have thought.", author: "Buddha" },
    { content: "If you judge people, you have no time to love them.", author: "Mother Teresa" },
    { content: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel" },
    { content: "The greatest wealth is to live content with little.", author: "Plato" },
    { content: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
    { content: "I have no special talent. I am only passionately curious.", author: "Albert Einstein" },
    { content: "The successful warrior is the average man, with laser‑like focus.", author: "Bruce Lee" },
    { content: "Those who dare to fail miserably can achieve greatly.", author: "John F. Kennedy" },
    { content: "A great man is always willing to be little.", author: "Ralph Waldo Emerson" },
    { content: "Wisely, and slow. They stumble that run fast.", author: "William Shakespeare" },
    { content: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { content: "Big Brother is watching you.", author: "George Orwell" },
    { content: "I think, therefore I am.", author: "René Descartes" },
    { content: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { content: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
    { content: "Time management is about life management.", author: "Idowu Koyenikan" },
    { content: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { content: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
    { content: "The most effective way to do it is to do it.", author: "Amelia Earhart" },
    { content: "No is a complete sentence.", author: "Anne Lamott" },
    { content: "Everything you want is on the other side of fear.", author: "Jack Canfield" },
    { content: "Do or do not; there is no try.", author: "Yoda" },
    { content: "Character is power.", author: "Booker T. Washington" },
    { content: "A day without laughter is a day wasted.", author: "Charlie Chaplin" },
    { content: "I have been impressed with the urgency of doing.", author: "Leonardo da Vinci" },
    { content: "Success is going from failure to failure without losing enthusiasm.", author: "Winston Churchill" },
    { content: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { content: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { content: "Say something positive, and you’ll see something positive.", author: "Jim Thompson" },
    { content: "Each day comes bearing its gifts. Untie the ribbon.", author: "Ann Ruth Schabacker" },
    { content: "To succeed you need a wishbone, a backbone, and a funny bone.", author: "Reba McEntire" },
    { content: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
    { content: "Never lose sight of how you treat other people.", author: "Barbara Bush" },
    { content: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
    { content: "Good things, when short, are twice as good.", author: "Baltasar Gracián" },
    { content: "Creativity takes courage.", author: "Henri Matisse" },
    { content: "No opportunity is missed because of looking like work.", author: "Thomas Edison" },
    { content: "The bad news is time flies. The good news is you're the pilot.", author: "Michael Altshuler" },
    { content: "You're never too old to set another goal.", author: "C.S. Lewis" },
    { content: "Find a group of people who challenge and inspire you.", author: "Amy Poehler" },
    { content: "You can, you should, and if you're brave enough to start, you will.", author: "Stephen King" },
    { content: "Keep your face toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { content: "You are never too old to dream a new dream.", author: "C.S. Lewis" },
    { content: "Some people look for a beautiful place. Others make a place beautiful.", author: "Hazrat Inayat Khan" },
    { content: "In your life expect some trouble… but don’t worry, be happy.", author: "Bobby McFerrin" },
    { content: "Pizza makes me think that anything is possible.", author: "Henry Rollins" },
    { content: "I love deadlines. I love the whooshing noise they make.", author: "Douglas Adams" },
    { content: "The road to success is always under construction.", author: "Lily Tomlin" },
    { content: "Age is of no importance unless you’re a cheese.", author: "Billie Burke" },
    { content: "Be like a postage stamp. Stick until you get there.", author: "Josh Billings" },
    { content: "Bad decisions make good stories.", author: "Ellis Vidler" },
    { content: "The brain is a wonderful organ; it does not stop until office time.", author: "Robert Frost" },
    { content: "Never be limited by other people’s imaginations.", author: "Mae Jemison" },
    { content: "A winner is a dreamer who never gives up.", author: "Nelson Mandela" },
    { content: "If you can articulate the dream or goal, start.", author: "Simon Sinek" },
    { content: "Hope is tenacious. It works when science deals a deathblow.", author: "Paul Laurence Dunbar" },
    { content: "Real change happens one step at a time.", author: "Ruth Bader Ginsburg" },
    { content: "Your work will fill a large part of your life.", author: "Steve Jobs" },
    { content: "If you do what you love, you’ll never work a day.", author: "Marc Anthony" },
    { content: "Creativity is intelligence having fun.", author: "Albert Einstein" },
    { content: "It is better to fail in originality than succeed in imitation.", author: "Herman Melville" },
    { content: "The aim of art is to represent inward significance.", author: "Aristotle" },
    { content: "Life is short, but it is wide.", author: "Rebecca Wells" },
    { content: "Courage doesn't always roar… sometimes it whispers.", author: "Mary Anne Radmacher" },
    { content: "It is not the strength of body, but strength of spirit.", author: "J.R.R. Tolkien" },
    { content: "Courage is being scared, but saddling up anyway.", author: "John Wayne" },
    { content: "Real courage is doing the right thing unseen.", author: "Justin Cronin" },
    { content: "Make your life from your heart, no permission needed.", author: "Roy T. Bennett" },
    { content: "It's kind of fun to do the impossible.", author: "Walt Disney" },
    { content: "When you believe, believe all the way.", author: "Walt Disney" },
    { content: "You have power over your mind, not outside events.", author: "Marcus Aurelius" },
    { content: "The biggest adventure is living the life of your dreams.", author: "Oprah Winfrey" },
    { content: "All serious daring starts from within.", author: "Eudora Welty" },
    { content: "You give energy to dreams or fears. Choose wisely.", author: "Unknown" },
    { content: "Live today the way your future self will thank you.", author: "Sean Patrick Flanery" },
    { content: "The future starts today, not tomorrow.", author: "Pope John Paul II" },
    { content: "Either you run the day or the day runs you.", author: "Jim Rohn" },
    { content: "You’ve got today, and today is all you need to start.", author: "Jon Acuff" },
    { content: "The good we do today becomes tomorrow's happiness.", author: "William James" },
    { content: "Learn from yesterday, live for today, hope for tomorrow.", author: "Albert Einstein" },
];

var authorDetails = {
  "Albert Einstein": {
    bio: "The genius physicist behind the theory of relativity, who changed how we understand space, time, and energy.",
    quotes: 180
  },
  "Frank Zappa": {
    bio: "American composer and musician known for his eclectic style and sharp social commentary.",
    quotes: 60
  },
  "Marcus Tullius Cicero": {
    bio: "Roman orator, statesman, and philosopher famous for his speeches and writings on rhetoric and politics.",
    quotes: 70
  },
  "Mae West": {
    bio: "Bold actress and playwright famous for her wit, double entendres, and unapologetic sexuality.",
    quotes: 55
  },
  "Mahatma Gandhi": {
    bio: "Leader of Indian independence movement using nonviolent civil disobedience to inspire the world.",
    quotes: 150
  },
  "Robert Frost": {
    bio: "American poet known for exploring nature and human emotion with simple yet profound verses.",
    quotes: 80
  },
  "Mark Twain": {
    bio: "Master storyteller and humorist who captured American life with sharp wit and satire.",
    quotes: 200
  },
  "Friedrich Nietzsche": {
    bio: "Philosopher who challenged traditional morality and introduced concepts like the 'Übermensch'.",
    quotes: 110
  },
  "Stephen Chbosky": {
    bio: "Writer and filmmaker known for ‘The Perks of Being a Wallflower’, capturing teenage struggles.",
    quotes: 20
  },
  "Marilyn Monroe": {
    bio: "Iconic actress and sex symbol whose charm and vulnerability captivated the world.",
    quotes: 50
  },
  "André Gide": {
    bio: "French author and Nobel Prize winner, known for exploring moral freedom and self-discovery.",
    quotes: 30
  },
  "Thomas A. Edison": {
    bio: "Inventor and businessman with over 1,000 patents, including the electric light bulb and phonograph.",
    quotes: 90
  },
  "J.K. Rowling": {
    bio: "British author who created the Harry Potter universe, enchanting millions worldwide.",
    quotes: 130
  },
  "Neil Gaiman": {
    bio: "Fantasy and graphic novel writer celebrated for his rich storytelling and mythic style.",
    quotes: 40
  },
  "William Shakespeare": {
    bio: "The Bard, whose plays and sonnets shaped English literature and theater forever.",
    quotes: 250
  },
  "Allen Saunders": {
    bio: "Writer credited with coining the phrase, ‘Life is what happens to you while you're busy making other plans.’",
    quotes: 15
  },
  "Eleanor Roosevelt": {
    bio: "Former First Lady and activist who championed human rights and social justice.",
    quotes: 110
  },
  "Confucius": {
    bio: "Ancient Chinese philosopher whose teachings focused on morality, society, and proper conduct.",
    quotes: 120
  },
  "Martin Luther King Jr.": {
    bio: "Civil rights leader who used powerful speeches and nonviolence to fight racial injustice.",
    quotes: 140
  },
  "Lao Tzu": {
    bio: "Philosopher and founder of Taoism, emphasizing harmony with the Tao (the Way).",
    quotes: 100
  },
  "Theodore Roosevelt": {
    bio: "26th US president, known for his progressive policies and ‘big stick’ diplomacy.",
    quotes: 95
  },
  "Ralph Waldo Emerson": {
    bio: "Essayist and poet, leader of transcendentalism promoting individuality and nature.",
    quotes: 90
  },
  "J.R.R. Tolkien": {
    bio: "Author of 'The Lord of the Rings', shaping modern fantasy literature.",
    quotes: 75
  },
  "Babe Ruth": {
    bio: "Baseball legend known for his homeruns and larger-than-life personality.",
    quotes: 35
  },
  "Helen Keller": {
    bio: "Author and activist who overcame deafness and blindness to inspire millions.",
    quotes: 60
  },
  "Bob Marley": {
    bio: "Reggae icon spreading messages of love, peace, and resistance.",
    quotes: 50
  },
  "Tony Robbins": {
    bio: "Motivational speaker and author empowering millions to achieve personal growth.",
    quotes: 90
  },
  "Pablo Picasso": {
    bio: "Revolutionary artist and co-founder of Cubism.",
    quotes: 40
  },
  "Dalai Lama": {
    bio: "Spiritual leader of Tibetan Buddhism promoting compassion and peace.",
    quotes: 80
  },
  "Oprah Winfrey": {
    bio: "Media mogul and philanthropist known for inspiring and empowering audiences worldwide.",
    quotes: 85
  },
  "Socrates": {
    bio: "Classical Greek philosopher famous for the Socratic method and ethical inquiries.",
    quotes: 110
  },
  "George Eliot": {
    bio: "Pen name of Mary Ann Evans, acclaimed Victorian novelist.",
    quotes: 25
  },
  "Norman Vaughan": {
    bio: "Explorer, dog musher, and adventurer who inspired with his resilience.",
    quotes: 10
  },
  "Peter Drucker": {
    bio: "Father of modern management theory and business consultant.",
    quotes: 50
  },
  "Sam Levenson": {
    bio: "Humorist and author with a knack for poignant comedy.",
    quotes: 20
  },
  "Wayne Gretzky": {
    bio: "Hockey legend known as ‘The Great One’ for his unmatched skill.",
    quotes: 30
  },
  "Joshua J. Marine": {
    bio: "Author and speaker focusing on positivity and success.",
    quotes: 15
  },
  "Nelson Mandela": {
    bio: "Anti-apartheid revolutionary and South Africa's first Black president.",
    quotes: 140
  },
  "Arthur Ashe": {
    bio: "Tennis champion and social activist fighting racial inequality.",
    quotes: 40
  },
  "Joseph P. Kennedy": {
    bio: "Businessman and politician, patriarch of the Kennedy family.",
    quotes: 15
  },
  "Robert Louis Stevenson": {
    bio: "Writer famous for adventure classics like 'Treasure Island'.",
    quotes: 45
  },
  "Florence Nightingale": {
    bio: "Founder of modern nursing and healthcare reformer.",
    quotes: 30
  },
  "Frank Sinatra": {
    bio: "Legendary singer and actor, ‘Ol’ Blue Eyes’ of the 20th century.",
    quotes: 60
  },
  "Franklin D. Roosevelt": {
    bio: "US president who led through the Great Depression and WWII.",
    quotes: 100
  },
  "William James": {
    bio: "Philosopher and psychologist, founder of pragmatism.",
    quotes: 70
  },
  "Winston Churchill": {
    bio: "British prime minister and WWII leader famous for his speeches.",
    quotes: 150
  },
  "George Addair": {
    bio: "Motivational author known for inspiring quotes on dreams and faith.",
    quotes: 15
  },
  "Buddha": {
    bio: "Spiritual teacher and founder of Buddhism, emphasizing enlightenment.",
    quotes: 130
  },
  "Gloria Steinem": {
    bio: "Feminist icon and journalist fighting for women’s rights.",
    quotes: 45
  },
  "Henry David Thoreau": {
    bio: "Naturalist and philosopher famous for ‘Walden’ and civil disobedience.",
    quotes: 90
  },
  "Christian D. Larson": {
    bio: "New Thought author inspiring personal development and positivity.",
    quotes: 25
  },
  "Milton Berle": {
    bio: "Comedian and television pioneer, ‘Mr. Television’.",
    quotes: 15
  },
  "T.S. Eliot": {
    bio: "Modernist poet known for ‘The Waste Land’ and complex themes.",
    quotes: 60
  },
  "Jim Rohn": {
    bio: "Motivational speaker and author focused on success principles.",
    quotes: 50
  },
  "Vince Lombardi": {
    bio: "Legendary football coach famous for leadership and discipline.",
    quotes: 40
  },
  "Napoleon Hill": {
    bio: "Self-help author of ‘Think and Grow Rich’, success guru.",
    quotes: 65
  },
  "C.S. Lewis": {
    bio: "Author and scholar known for ‘The Chronicles of Narnia’.",
    quotes: 80
  },
  "Booker T. Washington": {
    bio: "Educator and leader advocating for African-American progress.",
    quotes: 30
  },
  "Maya Angelou": {
    bio: "Poet, memoirist, and civil rights activist with powerful words.",
    quotes: 90
  },
  "George Bernard Shaw": {
    bio: "Playwright and critic known for wit and social commentary.",
    quotes: 55
  },
  "Ayn Rand": {
    bio: "Philosopher and novelist advocating objectivism and individualism.",
    quotes: 40
  },
  "Plutarch": {
    bio: "Ancient Greek biographer and moralist, author of ‘Parallel Lives’.",
    quotes: 25
  },
  "Walt Whitman": {
    bio: "Poet who celebrated democracy and the human spirit.",
    quotes: 85
  },
  "Aristotle": {
    bio: "Greek philosopher and scientist whose works shaped Western thought.",
    quotes: 130
  },
  "Goethe": {
    bio: "German writer and statesman, author of ‘Faust’.",
    quotes: 50
  },
  "Mother Teresa": {
    bio: "Catholic nun and missionary, symbol of compassion and charity.",
    quotes: 65
  },
  "Coco Chanel": {
    bio: "Fashion icon who revolutionized women’s style with elegance.",
    quotes: 35
  },
  "Plato": {
    bio: "Philosopher and student of Socrates, founder of the Academy.",
    quotes: 120
  },
  "Malcolm X": {
    bio: "Civil rights activist who advocated for Black empowerment.",
    quotes: 100
  },
  "Bruce Lee": {
    bio: "Martial artist, actor, and philosopher who changed martial arts forever.",
    quotes: 50
  }
};



function getRandomQuote() {
    document.getElementById('getBtn').style.display = 'none';
    const quoteText = document.getElementById('quote-text');
    const authorDiv = document.getElementById('author-details');
    const authorNameEl = document.getElementById('author-name');
    const authorBioEl = document.getElementById('author-bio');
    const authorQuotesEl = document.getElementById('author-quotes');

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    const author = selectedQuote.author;

    const fullQuote = `${selectedQuote.content} - ${author}`;
    quoteText.innerHTML = `"${fullQuote}" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="copy-to-clipboard-btn" onclick="copyToClipboard()"><i class="fa-regular fa-copy"></i></button>`;

    const info = authorDetails[author];

    authorDiv.style.display = 'block';

    if (info) {
        authorNameEl.innerHTML = `<b>Author:</b> ${author}`;
        authorBioEl.innerHTML = `<b>Bio:</b> ${info.bio}`;
        authorQuotesEl.innerHTML = `<b>Number of quotes:</b> ${info.quotes}`;
    } else {
        authorNameEl.innerHTML = `<b>Author:</b> ${author}`;
        authorBioEl.innerHTML = `<b>Bio:</b> No info available.`;
        authorQuotesEl.innerHTML = `<b>Number of quotes:</b> N/A`;
    }
}

function copyToClipboard() {
    const quoteText = document.getElementById('quote-text').textContent;
    navigator.clipboard.writeText(quoteText)
        .then(() => console.log('Copied!'))
        .catch(err => console.error('Clipboard error:', err));
}