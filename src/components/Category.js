import newBanner from '../assets/banners/newArrivals.jpg'
import sneakerBanner from '../assets/banners/sneakers.jpg'
import dressBanner from '../assets/banners/dressShoes.jpg'
import bootsBanner from '../assets/banners/boots.jpg'

function Category({category}) {
    let css;

    switch(category) {
        case 'Sneakers':
            css = {backgroundImage: `url(${sneakerBanner})`};
            break;
            case 'Dress Shoes':
            css = { backgroundImage: `url(${dressBanner})` };
            break;
            case 'Boots':
            css = { backgroundImage: `url(${bootsBanner})` };
             break;
        default:
            css = { backgroundImage: `url(${newBanner})` }
    }

    return(
        <div className="banner galleryBanner" style={css}>
            <h2 className='category'>{category}</h2>
        </div>
    )
}

export default Category;