import sneakers1 from './assets/sneakers/sneakers1.jpg'
import sneakers2 from './assets/sneakers/sneakers2.jpg'
import sneakers3 from './assets/sneakers/sneakers3.jpg'
import sneakers4 from './assets/sneakers/sneakers4.jpg'
import sneakers5 from './assets/sneakers/sneakers5.jpg'
import sneakers6 from './assets/sneakers/sneakers6.jpg'
import sneakers7 from './assets/sneakers/sneakers7.jpg'
import sneakers8 from './assets/sneakers/sneakers8.jpg'
import sneakers9 from './assets/sneakers/sneakers9.jpg'
import dressShoe1 from './assets/dressShoes/dressShoe1.jpg'
import dressShoe2 from './assets/dressShoes/dressShoe2.jpg'
import dressShoe3 from './assets/dressShoes/dressShoe3.jpg'
import dressShoe4 from './assets/dressShoes/dressShoe4.jpg'
import dressShoe5 from './assets/dressShoes/dressShoe5.jpg'
import dressShoe6 from './assets/dressShoes/dressShoe6.jpg'
import dressShoe7 from './assets/dressShoes/dressShoe7.jpg'
import dressShoe8 from './assets/dressShoes/dressShoe8.jpg'
import dressShoe9 from './assets/dressShoes/dressShoe9.jpg'
import boot1 from './assets/boots/boot1.jpg'
import boot2 from './assets/boots/boot2.jpg'
import boot3 from './assets/boots/boot3.jpg'
import boot4 from './assets/boots/boot4.jpg'
import boot5 from './assets/boots/boot5.jpg'
import boot6 from './assets/boots/boot6.jpg'
import boot7 from './assets/boots/boot7.jpg'
import boot8 from './assets/boots/boot8.jpg'
import boot9 from './assets/boots/boot9.jpg'

const shoeInfo = [
    {
    category: 'sneakers',
    brand: 'Nike',
    style: 'Forta Run K Sneaker',
    price: 114.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${sneakers1}`
    },
    {      
    category: 'sneakers',
    subCategory: 'new arrivals',
    brand: 'Puma',
    style: 'GV Special+ Sneaker',
    price: 104.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${sneakers2}`
    },
    {
    category: 'sneakers',
    brand: 'Puma',
    style: 'Suede XXI Sneaker',
    price: 124.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${sneakers3}`
    },
    {
    category: 'sneakers',    
    brand: 'DNA Athletics',
    style: 'Low-rise Crew Sneaker',
    price: 164.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${sneakers4}`
    },
    {
    category: 'sneakers',
    subCategory: 'new arrivals',
    brand: 'DNA Athletics',
    style: 'Cruise Rider Sneaker',
    price: 194.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${sneakers5}`
    },
    {   
    category: 'sneakers',
    brand: 'Nike',
    style: 'Air Max 3250',
    price: 159.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${sneakers6}`
    },
    {
    category: 'sneakers',
    brand: 'DNA Athletics',
    style: 'Suede Yael Sneaker',
    price: 114.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${sneakers7}`
    },
{
    category: 'sneakers',
    subCategory: 'new arrivals',
    brand: 'Calvin Klein',
    style: 'Solaris Sneaker',
    price: 214.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${sneakers8}`
    },
{
    category: 'sneakers',
    subCategory: 'new arrivals',
    brand: 'Nike',
    style: 'Revolution 8 Sneaker',
    price: 134.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${sneakers9}`
    },

{
    category: 'dress shoes',
    brand: 'Jimmy Choo',
    style: 'Champagne Sparkle Pump',
    price: 449.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${dressShoe1}`
    },
{
    category: 'dress shoes',
    subCategory: 'new arrivals',
    brand: 'Aldo',
    style: 'Floral Stiletto Pump',
    price: 74.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${dressShoe2}`
    },
{
    category: 'dress shoes',
    brand: 'Michael Kors',
    style: 'Classic Black Pump',
    price: 249.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${dressShoe3}`
    },
{
    category: 'dress shoes',
    brand: 'Pokemaoke',
    style: 'Black Leather Mule',
    price: 154.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${dressShoe4}`
    },
{
    category: 'dress shoes',
    brand: 'Chanel',
    style: 'Cap Toe Slingback Pump',
    price: 649.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${dressShoe5}`
    },
{
    category: 'dress shoes',
    brand: 'Pokemaoke',
    style: 'Teal Oxford',
    price: 124.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${dressShoe6}`
    },
{
    category: 'dress shoes',
    subCategory: 'new arrivals',
    brand: 'Michael Kors',
    style: 'Suede Laceup Bootie',
    price: 314.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${dressShoe7}`
    },
{
    category: 'dress shoes',
    brand: 'Franco Sarto',
    style: 'Velvet Gem Loafers',
    price: 114.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${dressShoe8}`
    },
{
    category: 'dress shoes',
    subCategory: 'new arrivals',
    brand: 'Chie Mihar',
    style: 'Goldie Oxford',
    price: 174.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${dressShoe9}`
    },
{
    category: 'boots',
    brand: 'Columbia',
    style: 'Montana Hiking Boot',
    price: 124.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${boot1}`    
    },
{
    category: 'boots',
    subCategory: 'new arrivals',
    brand: 'Timberland',
    style: 'Classic Boot - Rouge',
    price: 169.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${boot2}` 
    },
{
    category: 'boots',
    brand: 'Florsheim Shoes',
    style: 'Cap Toe Lace Boot',
    price: 149.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${boot3}` 
    },
{
    category: 'boots',
    brand: 'Outdoors',
    style: 'Waterproof Hiking Boot',
    price: 89.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${boot4}` 
    },
{
    category: 'boots',
    subCategory: 'new arrivals',
    brand: 'Moncler',
    style: 'Ridge Hiking Boot',
    price: 144.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: true,
    rating: 0,
    image: `${boot5}` 
    },
{
    category: 'boots',
    brand: 'Blundstone',
    style: 'Classic Rustic Boot',
    price: 214.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${boot6}` 
    },
{
    category: 'boots',
    brand: 'Timberland',
    style: 'Classic Boot - Tobacco',
    price: 169.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${boot7}` 
    },
{
    category: 'boots',
    brand: 'Timberland',
    style: 'Maddsen Waterproof Boot',
    price: 134.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${boot8}` 
    },
{
    category: 'boots',
    brand: 'Michael Kors',
    style: 'Rosé Hiking Boot',
    price: 249.99,
    sizes: [6, 7, 8, 9, 10, 11],
    newArrival: false,
    rating: 0,
    image: `${boot9}` 
    },
]

export default shoeInfo;