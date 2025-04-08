import React, { useState } from 'react'
import { content } from '../../config/content'
import { dataNoticias } from './data'
import Layout from '../../components/Layout'
import { useLanguage } from '../../context/LanguageContext'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Noticia } from '../../components/Noticia/Noticia';
import Pagination from '../../components/Pagination/Pagination'

const Noticias: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { currentLanguage } = useLanguage();
    const maxItemsPerPage = 9;
    const totalPages = Math.ceil(dataNoticias[currentLanguage].items.length / maxItemsPerPage);
    const noticiaRef = React.useRef<HTMLDivElement>(null);
    return (
        <Layout
            title={content.meta.title}
            description={content.meta.description}
            keywords={content.meta.keywords}
            image={content.meta.image}
        >
            <>
                <PageHeader
                    bg={dataNoticias[currentLanguage].pageHeader.bg}
                    text={dataNoticias[currentLanguage].pageHeader.text}
                />
                <Noticia
                    items={dataNoticias[currentLanguage].items}
                    currentPage={currentPage}
                    maxItemsPerPage={maxItemsPerPage}
                    ref={noticiaRef}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                        setCurrentPage(page);
                        noticiaRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                />
            </>
        </Layout>
    )
}

export default Noticias
