import { h } from 'preact';
import { Markdown } from 'astro/components';
import Styles from './styles.module.scss';
import Button from '../Button/index.jsx';

function AssignmentListing({ assignment }) {
    const { period_start, period_end, title, client, role, description, tags, teknik } = assignment
    const renderDate = `${new Date(period_start).getFullYear()} — ${new Date(period_end).getFullYear()}`


    return (
        <section className={Styles.listing_grid}>
            <div className={Styles.column_left}>{renderDate}</div>
            <div className={`${Styles.column_main} mt1`}>
                <h2 className={Styles.listing_title}>
                    {title} 
                    <span className={`${Styles.listing_title_inner} ml1`}>
                        {role.map((role, index) => `${index != 0 ? role : `${role}, `}`)}
                    </span>
                </h2>
                <p className={Styles.listing_description}>{description}</p>
                <a href="" class="link tc-light">Läs mer om {client}</a>
            </div>
        </section>
    )
}

export default AssignmentListing