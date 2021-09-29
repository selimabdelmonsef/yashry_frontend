import PriceRange from './price/price_range';
import ColorChoose from './color/colorChoose';
import styles from './filters.module.css';
import Submit from './submit/submit';

const Filters = () => {

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filtersBase}>
                <div>FILTERS</div>
                
                <div className={styles.priceRange}><PriceRange /></div>

                <ColorChoose />
            </div>
            <Submit/>
        </div>

    );
}
export default Filters;