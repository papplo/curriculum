import Styles from './Aside.module.scss'
import { h } from 'preact';
import { useState } from 'preact/hooks';
import showdown from 'showdown';

const AsideCode = ({ content = 'null content', image, bgColor, fgColor, caption, type = "code" }) => {
    const [value, setValue] = useState(content)
    const converter = new showdown.Converter()

    function handleUpdate(value) {
        setValue(value)
    }
    return (
        <aside
            className={Styles.aside}
            data-tag={type}
            style={typeof backgroundColor === 'undefined' ? {
                '--aside-bg-color': bgColor,
            } : null}
        >
            <div className={Styles.asideCode}  dangerouslySetInnerHTML={{__html: converter.makeHtml(value.slice(0, 2999))}} />
            {/* 
            <textarea oninput={event => handleUpdate(event.target.value)}></textarea>
            <pre id="highlighting" aria-hidden="true">
                <code class="language-html" id="highlighting-content">{value}</code>
            </pre> */}
        </aside>
    )
}

export default AsideCode;