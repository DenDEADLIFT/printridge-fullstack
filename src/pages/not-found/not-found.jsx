import styles from './not-found.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function NotFound404() {

    fetch('http://localhost:3002/404') 
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Ошибка:', error));


    const navigate = useNavigate()

    const location = useLocation();
    const canonicalUrl = ``;

    useEffect(() => {
        document.querySelector('link[rel="canonical"]').setAttribute('href', canonicalUrl);
        document.title = "Компания ПРИНТРИДЖ. Страница не найдена";
        document.querySelector('meta[name="title"]').setAttribute('content', `Компания ПРИНТРИДЖ. 404 Not Found`);
        document.querySelector('meta[name="description"]').setAttribute('content', `404 Not Found, Страница не найдена`);
        document.querySelector('meta[name="keywords"]').setAttribute('content', `заправка картриджей, заправить картридж, ремонт картриджей, ремонт оргтехники, создание сайтов,
        ремонт принтеров, ремонт мфу, ремонт ноутбуков, установка операционных систем Windows, Linux, удаление вирусов, в Санкт-Петербурге, Санкт-Петербург`);
    }, []);

    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.info_box}>
                    <h1 className={styles.title}>404 - Страница не найдена</h1>
                </div>
                <Link className={styles.button} to='/'>Вернуться на главную</Link>
                <Link className={styles.button} onClick={() => { navigate(-1) }}>Вернуться назад</Link>
            </div>
            <Navigate to="/404" replace />
        </>
    );
}

export default NotFound404;