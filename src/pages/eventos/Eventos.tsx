import React, { useState } from 'react'
import { content } from '../../config/content'
import { eventosData } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Noticia } from '../../components/Noticia/Noticia';
import Pagination from '../../components/Pagination/Pagination'
import { useWindowWidth } from '../../utils'

const Eventos: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { currentLanguage } = useLanguage()
    const maxItemsPerPage = 9;
    const totalPages = Math.ceil(eventosData[currentLanguage].items.length / maxItemsPerPage);
    const noticiaRef = React.useRef<HTMLDivElement>(null);
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth >= 992;

    return (
        <Layout
            title={content.meta.title}
            description={content.meta.description}
            keywords={content.meta.keywords}
            image={content.meta.image}
        >
            <>
                <PageHeader
                    bg={eventosData[currentLanguage].pageHeader.bg}
                    text={eventosData[currentLanguage].pageHeader.text}
                />
                <Noticia
                    items={eventosData[currentLanguage].items}
                    currentPage={currentPage}
                    maxItemsPerPage={maxItemsPerPage}
                    ref={noticiaRef}
                />
                {totalPages > 1 ? (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => {
                            setCurrentPage(page);
                            noticiaRef.current?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    />
                ) : <div style={{ paddingBottom: isDesktop ? '120px' : '56px' }}></div>}
            </>
        </Layout>
    )
}

export default Eventos

