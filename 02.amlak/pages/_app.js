import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <div className="container">
      <div className="sidebar">
                <input
                    type="checkbox"
                    name="toggle"
                    id="sidebar-toggle"
                    className="sidebar__input"
                />
                <label htmlFor="sidebar-toggle" className="sidebar__label">
                    <div className="sidebar__btn"></div>
                </label>

                <div className="sidebar__bg"></div>
                <ul className="list">
                    <li className="list__item">
                        <a href="index.html" className="list__link">صفحه اصلی</a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="list__link">ویژگی ها</a>
                    </li>
                    <li className="list__item">
                        <a href="" className="list__link">نظرات</a>
                    </li>
                    <li className="list__item">
                        <a href="houses.html" className="list__link">خانه ها</a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="list__link">گالری</a>
                    </li>
                </ul>
            </div>

            <header className="header">
                <img
                    src="/img/logo.png"
                    alt="Nexter Logo"
                    className="header__logo"
                />
                <h3 className="u-heading-3 u-heading--light">خانه خودتان:</h3>
                <h1 className="u-heading-1">
                    با خرید خانه نهایت آزادی را احساس کنید
                </h1>
                <Link href="/homes" className="btn header__btn btn-brown">
                    املاک ما را مشاهده کنید
                </Link>

                <p className="seeon__text">دیده می شود در</p>
                <figure className="seeon__box-img">
                    <img src="/img/logo-bbc.png" alt="BBC" className="seeon__img" />
                    <img src="/img/logo-bi.png" alt="BBC" className="seeon__img" />
                    <img
                        src="/img/logo-forbes.png"
                        alt="BBC"
                        className="seeon__img"
                    />
                    <img
                        src="/img/logo-techcrunch.png"
                        alt="BBC"
                        className="seeon__img"
                    />
                </figure>
            </header>

            <div className="real-tors">
                <p className="real-tors__tittle">سه مالک برتر</p>
                <div className="real-tors__list">
                    <img
                        src="/img/realtor-1.jpeg"
                        alt="real-tors top 1"
                        className="real-tors__img"
                    />
                    <div className="real-tors__details">
                        <h3 className="u-heading-3 u-heading--white">
                            مهدی ایلخانی نسب
                        </h3>
                        <p className="real-tors__text">869 فروش خانه</p>
                    </div>

                    <img
                        src="/img/realtor-2.jpeg"
                        alt="real-tors top 2"
                        className="real-tors__img"
                    />
                    <div className="real-tors__details">
                        <h3 className="u-heading-3 u-heading--white">کوثر بهشتی</h3>
                        <p className="real-tors__text">243 فروش خانه</p>
                    </div>

                    <img
                        src="/img/realtor-3.jpeg"
                        alt="real-tors top 3"
                        className="real-tors__img"
                    />
                    <div className="real-tors__details">
                        <h3 className="u-heading-3 u-heading--white">
                            عرشیا احسنی
                        </h3>
                        <p className="real-tors__text">130 فروش خانه</p>
                    </div>
                </div>
            </div>

      <Component {...pageProps} />

      <footer className="footer">
            <ul className="nav">
                <li className="nav__item">
                    <a href="#" className="nav__link"
                        >خانه رویایی خود را پیدا کنید</a
                    >
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">درخواست پروپوزال</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">برنامه اجاره خانه ها</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">با ما تماس بگیرید</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">ملک خود را ارسال کنید</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">با ما کار کنید</a>
                </li>
            </ul>

            <p className="copyright">
                &copy; حقوق مادی معنوی این سایت برای
                <strong className="copyright__name">مهدی ایلخانی نسب</strong>
                محفوظ میباشد
            </p>
        </footer>

    </div>
  );
}
