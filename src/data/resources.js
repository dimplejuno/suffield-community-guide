// Suffield, CT community resource directory.
// Real, publicly-listed organizations. Coordinates geocoded via OpenStreetMap
// (approximate). Minor details marked `unverified` should be confirmed.

export const categories = [
  { id: 'government', label: 'Government & Town', icon: '🏛️', hue: '#2d6098',
    blurb: 'Town Hall, the First Selectman, and the departments that keep Suffield running.' },
  { id: 'library', label: 'Library', icon: '📚', hue: '#0f7c86',
    blurb: 'Books, computers, programs, and a gathering place on the town green.' },
  { id: 'schools', label: 'Schools & Sports', icon: '🎓', hue: '#3b4c9c',
    blurb: 'Public schools, Suffield Academy, and youth recreation leagues.' },
  { id: 'organizations', label: 'Organizations', icon: '🤝', hue: '#b5642a',
    blurb: 'Nonprofits, service clubs, and volunteer groups that help neighbors.' },
  { id: 'history', label: 'History', icon: '🏺', hue: '#8a6a3b',
    blurb: 'The historical society and the historic houses that tell Suffield’s story.' },
  { id: 'farming', label: 'Farming & Nature', icon: '🌾', hue: '#4f7a2f',
    blurb: 'Land trusts, town parks, trails, and Suffield’s farming heritage.' },
  { id: 'churches', label: 'Churches', icon: '⛪', hue: '#6a4b86',
    blurb: 'Houses of worship serving the Suffield and West Suffield communities.' },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]));

function slugify(s) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const raw = [
  // ---------- Government / Town ----------
  {
    category: 'government',
    name: 'Town of Suffield (Town Hall)',
    description: 'Municipal government under a Board of Selectmen and Town Meeting. Home to the Town Clerk, Tax Collector, Assessor, Registrars, and most town departments.',
    long: 'Suffield operates under a Board of Selectmen and Town Meeting form of government. Town Hall houses the offices residents use most often — the Town Clerk (land records, vital records, licenses), the Tax Collector, the Assessor, and the Registrars of Voters — along with meeting spaces for the town’s many boards and commissions.',
    address: '83 Mountain Road, Suffield, CT 06078',
    phone: '860-668-3320',
    website: 'https://www.suffieldct.gov',
    coords: [41.982127, -72.654313],
  },
  {
    category: 'government',
    name: "First Selectman's Office",
    description: 'Office of the elected chief executive who oversees day-to-day operations of the town.',
    long: 'The First Selectman is Suffield’s elected chief executive and chairs the Board of Selectmen. The office coordinates town departments, sets agendas, and is the first point of contact for residents with questions about municipal services.',
    address: '83 Mountain Road, Suffield, CT 06078',
    website: 'https://www.suffieldct.gov/departments/fs',
    coords: [41.982127, -72.654313],
  },
  {
    category: 'government',
    name: 'Conservation Department',
    description: 'Oversees open space and town parks including Sunrise Park and Stony Brook Park, and maintains trails for passive recreation.',
    long: 'The Conservation Department and Commission steward Suffield’s open space, town parks, and trail network. They manage passive-recreation lands such as Sunrise Park and Stony Brook Park and review land-use matters that affect natural resources.',
    address: '83 Mountain Road, Suffield, CT 06078',
    website: 'https://www.suffieldct.gov/departments/conservation',
    coords: [41.982127, -72.654313],
  },
  {
    category: 'government',
    name: 'Social Services Department',
    description: 'Town department coordinating assistance and social services for residents, working alongside the Suffield Community Aid nonprofit.',
    long: 'The town’s Social Services Department helps residents navigate assistance programs and connects people to resources for food, heating, and household needs. It works closely with the Suffield Community Aid nonprofit.',
    website: 'https://www.suffieldct.gov/departments/social',
  },
  {
    category: 'government',
    name: 'Staff & Department Directory',
    description: 'Central online directory for reaching individual town departments, boards, and commissions.',
    long: 'A single online directory listing every town department, board, and commission with contact details — the fastest way to reach the right office.',
    website: 'https://www.suffieldct.gov/departments/directory',
  },

  // ---------- Library ----------
  {
    category: 'library',
    name: 'Kent Memorial Library',
    description: "Suffield's public library: books, digital resources, public computers and internet, children's and adult programs, and homebound delivery service.",
    long: 'Kent Memorial Library is Suffield’s public library on the town green. Beyond books, it offers e-books and digital resources, public computers and Wi-Fi, meeting and study space, children’s storytimes, adult programs, and a homebound delivery service for residents who cannot visit in person.',
    address: '50 North Main Street, Suffield, CT 06078',
    phone: '860-668-3896',
    website: 'https://www.suffield-library.org',
    meta: 'Sept–June: Mon–Thu 9:30–8, Fri 9:30–5, Sat 9:30–4',
    coords: [41.982033, -72.650468],
  },

  // ---------- Schools / Sports ----------
  {
    category: 'schools',
    name: 'Suffield Public Schools (District Office)',
    description: 'Public school district serving Suffield from PreK through grade 12.',
    long: 'The Suffield Public Schools district serves the town from PreK through grade 12 across four schools. The district office handles enrollment, transportation, and central administration.',
    address: '350 Mountain Road, Suffield, CT 06078',
    phone: '860-668-3800',
    website: 'https://www.suffield.org',
    coords: [41.984655, -72.663241],
  },
  {
    category: 'schools',
    name: 'A. Ward Spaulding School',
    description: 'Public elementary school serving grades PreK–2.',
    long: 'A. Ward Spaulding School is the district’s early-elementary school, serving Suffield’s youngest students in grades PreK through 2.',
    address: '945 Mountain Road, West Suffield, CT 06093',
    phone: '860-668-3826',
    coords: [41.984563, -72.687561],
  },
  {
    category: 'schools',
    name: 'McAlister Intermediate School',
    description: 'Public intermediate school serving grades 3–5.',
    long: 'McAlister Intermediate School serves students in grades 3 through 5, bridging early elementary and middle school.',
    address: '260 Mountain Road, Suffield, CT 06078',
    phone: '860-668-3830',
    coords: [41.985435, -72.660526],
  },
  {
    category: 'schools',
    name: 'Suffield Middle School',
    description: 'Public middle school serving grades 6–8.',
    long: 'Suffield Middle School serves grades 6 through 8 and shares a campus area with the district office on Mountain Road.',
    address: '350 Mountain Road, Suffield, CT 06078',
    phone: '860-668-3820',
    coords: [41.984655, -72.663241],
  },
  {
    category: 'schools',
    name: 'Suffield High School',
    description: 'Public high school serving grades 9–12.',
    long: 'Suffield High School serves grades 9 through 12 in West Suffield, offering academics, athletics, and extracurricular programs.',
    address: '1060 Sheldon Street, West Suffield, CT 06093',
    phone: '860-668-3810',
    coords: [41.981026, -72.693052],
  },
  {
    category: 'schools',
    name: 'Suffield Academy',
    description: 'Independent, coeducational college-preparatory boarding and day school for grades 9–12 and postgraduates.',
    long: 'Suffield Academy is an independent, coeducational college-preparatory school on North Main Street, enrolling boarding and day students in grades 9–12 and a postgraduate year.',
    address: '185 North Main Street, Suffield, CT 06078',
    phone: '860-386-4440',
    website: 'https://www.suffieldacademy.org',
    coords: [41.984191, -72.641603],
  },
  {
    category: 'schools',
    name: 'Suffield Little League',
    description: 'Youth baseball and softball recreation league for local children.',
    long: 'Suffield Little League runs spring and summer youth baseball and softball for local children, from tee-ball through the older divisions.',
    website: 'https://suffieldlittleleague.com',
  },

  // ---------- Organizations ----------
  {
    category: 'organizations',
    name: 'Suffield Community Aid',
    description: 'Nonprofit safety-net agency providing health and social services. Runs Meals on Wheels, a food pantry, and a 24/7 outdoor food cabinet.',
    long: 'Suffield Community Aid is the town’s nonprofit safety net, providing health and social services to residents of all ages. Its programs include Meals on Wheels, a food pantry, a 24/7 outdoor food cabinet, medical-equipment loans, and help connecting people to assistance.',
    address: '450 South Street, Suffield, CT 06078',
    phone: '860-668-1986',
    website: 'https://suffieldcommunityaid.org',
    coords: [41.97178, -72.65924],
  },
  {
    category: 'organizations',
    name: 'Suffield Senior Center',
    description: 'Programs, activities, and information for older adults, supporting health, independence, and social connection.',
    long: 'The Suffield Senior Center on Bridge Street offers classes, exercise, meals, trips, and social programs for older adults, along with information and referral services that support independence and connection.',
    address: '145 Bridge Street, Suffield, CT 06078',
    website: 'https://www.suffieldct.gov/departments/seniors',
    coords: [41.979901, -72.645622],
  },
  {
    category: 'organizations',
    name: 'The Suffield Players',
    description: 'Volunteer community theatre company founded in 1952, staging several productions a year plus free staged readings at historic Mapleton Hall.',
    long: 'The Suffield Players is a volunteer community theatre company founded in 1952. It stages several full productions a year plus a series of free staged readings, all at historic Mapleton Hall in the north end of town.',
    address: '1305 Mapleton Avenue, Suffield, CT 06078',
    phone: '860-668-0837',
    website: 'https://www.suffieldplayers.org',
    coords: [42.015185, -72.623786],
  },
  {
    category: 'organizations',
    name: 'Suffield Garden Club',
    description: 'Volunteer club focused on gardening, horticulture education, and town beautification.',
    long: 'The Suffield Garden Club brings together residents interested in gardening and horticulture. Members maintain public plantings, host educational programs, and support town beautification.',
    website: 'https://suffieldgardenclub.org',
  },
  {
    category: 'organizations',
    name: 'Suffield Rotary Club',
    description: 'Local service club (Rotary District 7890) supporting community projects and charitable causes.',
    long: 'The Suffield Rotary Club is part of Rotary District 7890, bringing local volunteers together to fund scholarships, support community projects, and back charitable causes at home and abroad.',
    website: 'https://rotarydistrict7890.org',
  },
  {
    category: 'organizations',
    name: 'VFW Landry-Sic Post 9544',
    description: 'Veterans of Foreign Wars post serving area veterans and hosting community and veteran events.',
    long: 'VFW Landry-Sic Post 9544 serves Suffield-area veterans of foreign wars, offering camaraderie, support, and community and veteran-focused events.',
    address: '972 Sheldon Street, West Suffield, CT 06093',
    unverified: 'Address from third-party listings — confirm before visiting.',
    coords: [41.980248, -72.688695],
  },

  // ---------- History ----------
  {
    category: 'history',
    name: 'Suffield Historical Society',
    description: "Preserves and interprets Suffield's history and operates the King House Museum.",
    long: 'The Suffield Historical Society collects, preserves, and interprets the town’s history. It operates the King House Museum and offers programs, research access, and exhibits on Suffield’s past.',
    website: 'https://www.suffieldhistoricalsociety.org',
  },
  {
    category: 'history',
    name: 'King House Museum',
    description: 'Historic house museum (Dr. Alexander King house) with period rooms, local artifacts, and exhibits on Suffield and its tobacco history.',
    long: 'The King House Museum, home of the Suffield Historical Society, is the 18th-century house of Dr. Alexander King. Its period rooms and collections tell the story of Suffield life, including the town’s long history of tobacco growing.',
    address: '232 South Main Street, Suffield, CT 06078',
    website: 'https://www.suffieldhistoricalsociety.org',
    coords: [41.974727, -72.653561],
  },
  {
    category: 'history',
    name: 'Phelps-Hatheway House & Garden',
    description: '18th-century historic house known for its French wallpaper and formal gardens, operated by Connecticut Landmarks. Seasonal tours, typically June–October.',
    long: 'The Phelps-Hatheway House & Garden is an 18th-century property on South Main Street operated by Connecticut Landmarks. It is celebrated for its rare period French wallpaper and formal gardens, with seasonal tours typically running June through October.',
    address: '55 South Main Street, Suffield, CT 06078',
    website: 'https://ctlandmarks.org/properties/phelps-hatheway-house-garden/',
    coords: [41.980516, -72.652405],
  },

  // ---------- Farming / Nature ----------
  {
    category: 'farming',
    name: 'Suffield Land Conservancy',
    description: 'Nonprofit land trust founded in 1980 preserving open space for wildlife and passive recreation — 30+ properties totaling 700+ acres with public trails.',
    long: 'The Suffield Land Conservancy is a nonprofit land trust founded in 1980. It protects open space for wildlife habitat and passive recreation, holding dozens of properties totaling hundreds of acres, many with public trails open to residents.',
    address: 'P.O. Box 421, Suffield, CT 06078',
    website: 'https://www.suffieldlandconservancy.org',
  },
  {
    category: 'farming',
    name: 'Sunrise Park',
    description: 'Town park with a lake, hiking trails, and recreation areas, managed by the Conservation Commission.',
    long: 'Sunrise Park is a town park with a lake, hiking trails, and recreation areas, managed by the Conservation Commission and open to residents.',
    website: 'https://www.suffieldct.gov/departments/conservation',
  },
  {
    category: 'farming',
    name: 'Stony Brook Park',
    description: 'Town conservation park and open space overseen by the Suffield Conservation Commission.',
    long: 'Stony Brook Park is a town conservation area offering quiet open space and trails, overseen by the Suffield Conservation Commission.',
    website: 'https://www.suffieldct.gov/departments/conservation',
  },
  {
    category: 'farming',
    name: "Suffield's Working Farms",
    description: 'Town resource highlighting local farms, farm stands, and Suffield’s long agricultural and tobacco-growing heritage.',
    long: 'Farming is central to Suffield’s identity, from shade-grown tobacco to produce and dairy. The town highlights its working farms and farm stands, where residents can buy local and connect with the town’s agricultural roots.',
    website: 'https://www.suffieldct.gov',
  },

  // ---------- Churches ----------
  {
    category: 'churches',
    name: 'First Church of Christ, Congregational (UCC)',
    description: 'Historic United Church of Christ congregation in an 1869 Romanesque Revival building on the town green.',
    long: 'The First Church of Christ, Congregational (UCC) is a historic congregation whose 1869 Romanesque Revival building anchors the town green on High Street.',
    address: '81 High Street, Suffield, CT 06078',
    phone: '860-668-7223',
    website: 'https://www.firstchurchsuffield.org',
    coords: [41.983502, -72.651519],
  },
  {
    category: 'churches',
    name: 'West Suffield Congregational Church (UCC)',
    description: 'United Church of Christ congregation serving the West Suffield area.',
    long: 'The West Suffield Congregational Church (UCC) serves the West Suffield area of town with worship, fellowship, and community programs.',
    address: '1408 Mountain Road, West Suffield, CT 06093',
    phone: '860-668-2271',
    website: 'https://www.westsuffielducc.org',
    coords: [42.01311, -72.726366],
  },
  {
    category: 'churches',
    name: 'Sacred Heart Parish',
    description: 'Roman Catholic parish serving Suffield-area Catholics.',
    long: 'Sacred Heart Parish is the Roman Catholic parish serving Suffield-area Catholics, with Mass, sacraments, and parish activities on Mountain Road.',
    address: '446 Mountain Road, Suffield, CT 06078',
    phone: '860-668-4246',
    website: 'https://sacredheartct.com',
    coords: [41.983897, -72.66683],
  },
];

export const resources = raw.map((r) => ({ ...r, slug: slugify(r.name) }));

export const resourceBySlug = Object.fromEntries(resources.map((r) => [r.slug, r]));

// Town center for map default view.
export const TOWN_CENTER = [41.984, -72.656];
