import { h } from 'preact';
import Styles from './Aside.module.scss'

const Aside = ({ image, bgColor, fgColor, caption, type = "default"}) => {
    return (
        <aside 
            className={Styles.aside} 
            data-tag={type} 
            style={typeof backgroundColor === 'undefined' ? {
                '--aside-bg-color': bgColor,
            } : null}
        >
            {!image && (
                <figure className={Styles.figure}>
                    <img src={image} />
                    <figcaption
                        style={typeof color === 'undefined' ? {
                            '--theme-fg-color': fgColor,
                        }: null}
                    >{caption}</figcaption>
                </figure>
            )}
        </aside>
    )
}

export default Aside;