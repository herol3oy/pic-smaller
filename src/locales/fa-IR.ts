import { LocaleData } from "@/type";
import faIR from "antd/locale/fa_IR";

const localeData: LocaleData = {
  antLocale: faIR,
  logo: "پامیدور | فشرده سازی هوشمند تصاویر",
  initial: "در حال راه‌اندازی",
  previewHelp:
    "خط تقسیم را بکشید تا اثر فشرده‌سازی را مقایسه کنید: سمت چپ تصویر اصلی است، سمت راست تصویر فشرده شده است",
  uploadCard: {
    title: "فایل‌ها را اینجا انتخاب کنید، پشتیبانی از کشیدن فایل‌ها و پوشه‌ها",
    subTitle: "ابزار فشرده‌سازی دسته‌ای تصاویر منبع باز، پشتیبانی از فرمت %s",
  },
  listAction: {
    batchAppend: "افزودن دسته‌ای",
    addFolder: "افزودن پوشه",
    clear: "پاک کردن همه",
    downloadAll: "ذخیره همه",
    downloadOne: "ذخیره تصویر",
    removeOne: "حذف تصویر",
    reCompress: "فشرده‌سازی مجدد",
  },
  columnTitle: {
    status: "وضعیت",
    name: "نام",
    preview: "پیش‌نمایش",
    size: "اندازه",
    dimension: "ابعاد",
    decrease: "کاهش",
    action: "عمل",
    newSize: "اندازه جدید",
    newDimension: "ابعاد جدید",
  },
  optionPannel: {
    failTip:
      "نمی‌تواند کوچکتر شود، لطفاً پارامترها را تنظیم کرده و دوباره امتحان کنید.",
    help: "تصویر کوچکتر یک برنامه فشرده‌سازی دسته‌ای تصاویر است. تغییرات در گزینه‌ها به همه تصاویر اعمال خواهد شد.",
    resizeLable: "تغییر اندازه تصویر",
    jpegLable: "پارامترهای JPEG/WEBP",
    pngLable: "پارامترهای PNG",
    gifLable: "پارامترهای GIF",
    avifLable: "پارامترهای AVIF",
    resizePlaceholder: "حالت تنظیم را انتخاب کنید",
    fitWidth: "تنظیم عرض، ارتفاع به طور خودکار مقیاس می‌شود",
    fitHeight: "تنظیم ارتفاع، عرض به طور خودکار مقیاس می‌شود",
    setShort: "تنظیم ضلع کوتاه، ضلع بلند به طور خودکار مقیاس می‌شود",
    setLong: "تنظیم ضلع بلند، ضلع کوتاه به طور خودکار مقیاس می‌شود",
    widthPlaceholder: "عرض تصویر خروجی را تنظیم کنید",
    heightPlaceholder: "ارتفاع تصویر خروجی را تنظیم کنید",
    shortPlaceholder: "طول ضلع کوتاه تصویر خروجی را تنظیم کنید",
    longPlaceholder: "طول ضلع بلند تصویر خروجی را تنظیم کنید",
    resetBtn: "بازنشانی گزینه‌ها",
    confirmBtn: "اعمال گزینه‌ها",
    qualityTitle: "تنظیم کیفیت تصویر خروجی (0-1)",
    colorsDesc: "تنظیم تعداد رنگ‌های خروجی (2-256)",
    pngDithering: "تنظیم ضریب دانه‌بندی (0-1)",
    gifDithering: "فعال کردن دانه‌بندی",
    avifQuality: "تنظیم کیفیت تصویر خروجی (1-100)",
    avifSpeed: "تنظیم سرعت فشرده‌سازی (1-10)",
    outputFormat: "تنظیم فرمت خروجی",
    outputFormatPlaceholder: "فرمت تصویر خروجی را انتخاب کنید",
    transparentFillDesc: "انتخاب رنگ پر کردن شفاف",
  },
  error404: {
    backHome: "بازگشت به خانه",
    description: "متاسفیم، صفحه‌ای که بازدید کردید وجود ندارد~",
  },
  progress: {
    before: "قبل از فشرده‌سازی",
    after: "بعد از فشرده‌سازی",
    rate: "نسبت کاهش",
  },
};

export default localeData;
