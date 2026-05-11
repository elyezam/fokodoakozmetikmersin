document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const products = [
    {
        "id": 44547908,
        "name": "Tesadüf Kadın Parfümü 30ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_00dd68c21cb5ae5518e2404146d5c86b.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866501",
        "price": "500 TL"
    },
    {
        "id": 44547909,
        "name": "Hayat Kadın Parfümü 30ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_a9f72991dd8ae1d012a86356b5235410.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866482",
        "price": "500 TL"
    },
    {
        "id": 44547910,
        "name": "Gün Kadın Parfümü 30ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2aa295f899797223ce2f89488c4338e2.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866469",
        "price": "500 TL"
    },
    {
        "id": 44547911,
        "name": "Hayal Kadın Parfümü 50ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_87250d84eb0496ec76d6bb53de525ef5.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866447",
        "price": "750 TL"
    },
    {
        "id": 44547912,
        "name": "Düş Kadın Parfümü 30ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_347ef5f7a36d2c64bd0b58334113afeb.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866425",
        "price": "500 TL"
    },
    {
        "id": 44547913,
        "name": "İda Kadın Parfümü 30ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_df3d9da5d7b1615d999b8be88c02f4e1.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866403",
        "price": "500 TL"
    },
    {
        "id": 44547914,
        "name": "Şans Kadın Parfümü 50ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_9d0e033db850c7a40fd1b26e1a272b76.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866368",
        "price": "750 TL"
    },
    {
        "id": 44547915,
        "name": "Pudra Kadın Parfümü 50ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_60cdb46c7067ecffc9826475968527de.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866331",
        "price": "750 TL"
    },
    {
        "id": 44547916,
        "name": "Kristal Kadın Parfümü 50ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_5f331fb4300e4f52ce792e2f1bb3b5dd.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866236",
        "price": "750 TL"
    },
    {
        "id": 44547917,
        "name": "Vişne Kadın Parfümü 30ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2af2305e889ce36a5404b0afcdc3b4ac.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866195",
        "price": "500 TL"
    },
    {
        "id": 44547918,
        "name": "Huzur Kadın Parfümü 30ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_9871f37341b8bdaf1f5bffb87f8d1a11.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866076",
        "price": "500 TL"
    },
    {
        "id": 44547919,
        "name": "AKŞAM KİRAZI Unisex Parfüm 30ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_c489c8688fb187735cbe9adade9567f2.jpeg",
        "link": "https://www.shopier.com/fokomersin/40866042",
        "price": "500 TL"
    },
    {
        "id": 44547920,
        "name": "Kam Erkek Parfümü 50ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_72ac0bc20f381e12415e7f2adca65a33.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865972",
        "price": "750 TL"
    },
    {
        "id": 44547921,
        "name": "Karagöz Erkek Parfümü 30ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_a249fe3c9ee37315b95331fcc2df98d3.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865942",
        "price": "500 TL"
    },
    {
        "id": 44547922,
        "name": "İyi Akşamlar Erkek Parfümü 30ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_052cf2dad425024f156e318e1404da6c.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865903",
        "price": "500 TL"
    },
    {
        "id": 44547923,
        "name": "Foça Parfüm Erkek Parfümü 30ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_57512c2b5c63fc4607d5fbfff54f9d06.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865876",
        "price": "500 TL"
    },
    {
        "id": 44547924,
        "name": "Halikarnas Erkek Parfümü 30ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_63a22f1c42f40265613004a520a2e3f1.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865844",
        "price": "500 TL"
    },
    {
        "id": 44547925,
        "name": "Toros Erkek Parfümü 30ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_d5f7ddcc7b5601ea30f76c6173cf82c6.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865785",
        "price": "500 TL"
    },
    {
        "id": 44547926,
        "name": "Levant Erkek Parfümü 30ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_8da1116d63970053b11d946c06137b91.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865813",
        "price": "500 TL"
    },
    {
        "id": 44547927,
        "name": "Ten Erkek Parfümü 50ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_870fce9a55a3a9bf2bf763a365bff673.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865755",
        "price": "750 TL"
    },
    {
        "id": 44547928,
        "name": "Göcek Erkek Parfümü 50ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_7c2cf58558beaef000b67f95c5dfb71f.jpeg",
        "link": "https://www.shopier.com/fokomersin/40865668",
        "price": "750 TL"
    },
    {
        "id": 44547929,
        "name": "Ada Erkek Parfümü 50ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_a5104acd3daf3b8377504e3d8e33e7c4.png",
        "link": "https://www.shopier.com/fokomersin/40865622",
        "price": "750 TL"
    },
    {
        "id": 44547930,
        "name": "Göcek Parfüm Erkek Parfümü 30 ml",
        "category": "erkek-parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_88b2e47535dae17dc756ef283076200a.jpeg",
        "link": "https://www.shopier.com/fokomersin/44913180",
        "price": "500 TL"
    },
    {
        "id": 44547954,
        "name": "TIZIANA TERENZI HALLEY Unisex Parfüm",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2d22fa24c95256fdefaad2a0fd31caed.png",
        "link": "https://www.shopier.com/fokomersin/45865694",
        "price": "3.000 TL"
    },
    {
        "id": 44547955,
        "name": "Aura Kinetica | 55ml",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_fa3efadaadf7bbebf18fdb27448eb5a8.png",
        "link": "https://www.shopier.com/fokomersin/45249227",
        "price": "9.999 TL"
    },
    {
        "id": 44547956,
        "name": "Kuk Parfüm 55ml | Green Awakening | Yeni Kesilmiş Çim Ferahlığı",
        "category": "parfum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_12130c94f0c35b68b56545ac27aa2609.png",
        "link": "https://www.shopier.com/fokomersin/45118096",
        "price": "7.999 TL"
    },
    {
        "name": "Güneş Kremi 50 SPF (Hibrit)",
        "category": "gunes",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_f049db8347887391c218681ae83883ce.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932787",
        "price": "300 TL",
        "id": 44547957
    },
    {
        "name": "New Generation Güneş Kremi",
        "category": "gunes",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_6edfbcd7009552a96f36c22424bd8942.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932746",
        "price": "325 TL",
        "id": 44547958
    },
    {
        "name": "Tone Up SPF 50+ Güneş Kremi",
        "category": "gunes",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_93977a17f544693aa07ca4f888652f7c.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932695",
        "price": "350 TL",
        "id": 44547959
    },
    {
        "name": "Güneş Kremi 50 SPF (Mineral)",
        "category": "gunes",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_d664f4f42d58280933ed104b3e976f57.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932649",
        "price": "325 TL",
        "id": 44547960
    },
    {
        "name": "Chemical Filter Güneş Kremi",
        "category": "gunes",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_9c36ac917701de82704587146f5bd268.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932606",
        "price": "300 TL",
        "id": 44547961
    },
    {
        "name": "Güneş Kremi Vücut 150 ml",
        "category": "gunes",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_79327d71ffb6a618d3ebc5a714e84af2.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932558",
        "price": "500 TL",
        "id": 44547962
    },
    {
        "name": "Yüz Yıkama Jeli",
        "category": "temizleyici",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_25c4e3432394895410cde58ac6d80b3b.jpeg",
        "link": "https://www.shopier.com/fokomersin",
        "price": "250 TL",
        "id": 44547963
    },
    {
        "name": "AHA & BHA Asit Bakım",
        "category": "asit",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2fcb7635c3cf67415aa765e459d61d0b.jpeg",
        "link": "https://www.shopier.com/fokomersin",
        "price": "300 TL",
        "id": 555001
    },
    {
        "name": "Leke Karşıtı Asit Serumu",
        "category": "asit",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_3edc9c62b8ef66fa153b5bd16a7c93cf.jpeg",
        "link": "https://www.shopier.com/fokomersin",
        "price": "300 TL",
        "id": 555002
    },
    {
        "name": "Arındırıcı Asit Tonik",
        "category": "asit",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_be870aca9733d750904445bc9cdb0e68.jpeg",
        "link": "https://www.shopier.com/fokomersin",
        "price": "300 TL",
        "id": 555003
    },
    {
        "name": "%7 glikolik asit",
        "category": "asit",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_963692971629f7beba7aca6bc5e1dfa7.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932489",
        "price": "225 TL",
        "id": 1002
    },
    {
        "name": "Centella Serum | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_bd799c8d064e2f4e05d05b7775d0ea69.jpeg",
        "link": "https://www.shopier.com/fokomersin/44547907",
        "price": "225,00 TL",
        "id": 44547907
    },
    {
        "name": "HYALURONİC ACID B3 VİTAMİNİ SERUMU | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_f695442d39b8c1e17777c7a440c65f73.jpeg",
        "link": "https://www.shopier.com/fokomersin/44547500",
        "price": "225,00 TL",
        "id": 44547500
    },
    {
        "name": "Ginseng Serum | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_bed980c8725da96be0afa3a2b66b0a34.jpeg",
        "link": "https://www.shopier.com/fokomersin/44547376",
        "price": "225,00 TL",
        "id": 44547376
    },
    {
        "name": "Sivilce Bakım Seti | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_e6833f69542fbbd1a8fdc021fb44c59f.png",
        "link": "https://www.shopier.com/fokomersin/44298388",
        "price": "675,00 TL",
        "id": 44298388
    },
    {
        "name": "Retinal %0,1 Krem | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_215eb57586e03945edf52a23e68aca79.jpeg",
        "link": "https://www.shopier.com/fokomersin/43571098",
        "price": "500,00 TL",
        "id": 43571098
    },
    {
        "name": "Retinal %0,025 Krem | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_971818910189b4b27af215e5161cad49.jpeg",
        "link": "https://www.shopier.com/fokomersin/43571070",
        "price": "250,00 TL",
        "id": 43571070
    },
    {
        "name": "Retinol %0,3 Krem | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_e0d06c284659899900b7dadc8c089fdb.jpeg",
        "link": "https://www.shopier.com/fokomersin/43571051",
        "price": "500,00 TL",
        "id": 43571051
    },
    {
        "name": "Retinol %0,1 Krem | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_0463ea42c0f1af36976c8db516e1630b.jpeg",
        "link": "https://www.shopier.com/fokomersin/43571039",
        "price": "350,00 TL",
        "id": 43571039
    },
    {
        "name": "Retinol %0,05 Krem | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_b191fd785cd5d03e9746ba23c3121582.jpeg",
        "link": "https://www.shopier.com/fokomersin/43571015",
        "price": "250,00 TL",
        "id": 43571015
    },
    {
        "name": "HYALURONİC ACID SERUM %2 | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_f93b4bae255739f1e22e88accfed6bff.jpeg",
        "link": "https://www.shopier.com/fokomersin/43527646",
        "price": "225,00 TL",
        "id": 43527646
    },
    {
        "name": "Cilt Temizleme Yağı | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_d69d9aa8251ef3cfaa9985501b82d3c8.jpeg",
        "link": "https://www.shopier.com/fokomersin/40933538",
        "price": "250,00 TL",
        "id": 40933538
    },
    {
        "name": "L ascorbic acid 10ml | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_f7093bb3b197ce62b8061cfd6ace8505.jpeg",
        "link": "https://www.shopier.com/fokomersin/46383585",
        "price": "200,00 TL",
        "id": 46383585
    },
    {
        "name": "ACN SERİES CİLT BAKIM TONİĞİ | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_df2811e54e51c3574f4b83566045b48a.png",
        "link": "https://www.shopier.com/fokomersin/45899865",
        "price": "250,00 TL",
        "id": 45899865
    },
    {
        "name": "Arbutin Serum 20 ML | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_8e7aa425895f353c2c7f2a3d87ddcd4e.png",
        "link": "https://www.shopier.com/fokomersin/45838810",
        "price": "225,00 TL",
        "id": 45838810
    },
    {
        "name": "ACN Nemlendirici Bakım Serumu 20ML | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_99076f7bc3bb9f4572ba3d5b60c9f4e2.png",
        "link": "https://www.shopier.com/fokomersin/45766039",
        "price": "150,00 TL",
        "id": 45766039
    },
    {
        "name": "ACN Series Yüz Yıkama Jeli (150 ml) | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_bc367aa4383bdf7cfa34bd9e7a4d1626.png",
        "link": "https://www.shopier.com/fokomersin/45765666",
        "price": "250,00 TL",
        "id": 45765666
    },
    {
        "name": "ATP Sıvı Yıkama Sabunu 500ML | Foko Mersin",
        "category": "cilt",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_9c25c7cc8959a07318a6e17b80cfcb8f.png",
        "link": "https://www.shopier.com/fokomersin/45764805",
        "price": "500,00 TL",
        "id": 45764805
    },
    {
        "name": "Nemlendirici Krem | Foko Mersin",
        "category": "krem",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_5fef9fc52e8626ce08f97db38fd6fc53.png",
        "link": "https://www.shopier.com/fokomersin/40865491",
        "price": "225,00 TL",
        "id": 40865491
    },
    {
        "name": "The Future Nemlendirici Vücut Losyonu   | Foko Mersin",
        "category": "krem",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_67be23ff0418d57c1bc2087ab344e10a.png",
        "link": "https://www.shopier.com/fokomersin/40864721",
        "price": "305,00 TL",
        "id": 40864721
    },
    {
        "name": "ATP Nemlendirici Vücut Losyonu | Foko Mersin",
        "category": "krem",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_279b623b266ede55d1e992ed2aea69c0.png",
        "link": "https://www.shopier.com/fokomersin/40864696",
        "price": "500,00 TL",
        "id": 40864696
    },
    {
        "name": "C Vitamini %10 Serum | Foko Mersin",
        "category": "serum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_0e0a8cdb401a98dccdbe3bdc6077d760.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932205",
        "price": "400,00 TL",
        "id": 40932205
    },
    {
        "name": "C vitamini %5 Serumu (20 ml) | Foko Mersin",
        "category": "serum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_d44fb61d9620662d14aba5aed39121c4.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932177",
        "price": "275,00 TL",
        "id": 40932177
    },
    {
        "name": "HYALURONİC ACID C VİTAMİNİ SERUMU | Foko Mersin",
        "category": "serum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_87cb770b3282b2780b1fe5b83e95a57f.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932129",
        "price": "275,00 TL",
        "id": 40932129
    },
    {
        "name": "L-Ascorbic Acid Serum | Foko Mersin",
        "category": "serum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_06099659af0ebb5217f28fb38e369d69.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932056",
        "price": "200,00 TL",
        "id": 40932056
    },
    {
        "name": "Peptide serum | Foko Mersin",
        "category": "serum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_ddb6065b89ee36f8ff0e2616c0f6e34f.jpeg",
        "link": "https://www.shopier.com/fokomersin/40932004",
        "price": "300,00 TL",
        "id": 40932004
    },
    {
        "name": "Foot Peeling (Ayak Peelingi) | Foko Mersin",
        "category": "serum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_d74387bf90fcd17f5c0a463750f14573.jpeg",
        "link": "https://www.shopier.com/fokomersin/40931959",
        "price": "250,00 TL",
        "id": 40931959
    },
    {
        "name": "Argireline Oil Serum(Kırışıklık Karşıtı Serum-Kuru ciltler) | Foko Mersin",
        "category": "serum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_a9800bd7ce864df6765fe41cb326044e.jpeg",
        "link": "https://www.shopier.com/fokomersin/40931919",
        "price": "500,00 TL",
        "id": 40931919
    },
    {
        "name": "Argireline %10 Serum (Kırışıklık Karşıtı) | Foko Mersin",
        "category": "serum",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_6efb97a1eb4d62589a467470efd36122.jpeg",
        "link": "https://www.shopier.com/fokomersin/40931847",
        "price": "450,00 TL",
        "id": 40931847
    },
    {
        "name": "INTENSE COLA Unisex Parfüm 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_c42a35c036550a3ab45ae1f5d0ebe264.png",
        "link": "https://www.shopier.com/fokomersin/45894606",
        "price": "750,00 TL",
        "id": 45894606
    },
    {
        "name": "MAISON FRANCIS KURKDJIAN BACCARAT ROUGE 540 Unisex 50 ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_0e0e11015cf247499f366f64cb23f225.png",
        "link": "https://www.shopier.com/fokomersin/45907081",
        "price": "1.000,00 TL",
        "id": 45907081
    },
    {
        "name": "JACQUES BOGART SILVER SCENT INTENSE Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_bdca894acbb8ee8ad53c4af692a5733d.png",
        "link": "https://www.shopier.com/fokomersin/45894157",
        "price": "750,00 TL",
        "id": 45894157
    },
    {
        "name": "BURBERRY GODDESS Kadın Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_3f66de8c9b628925a594fe9cdcede412.png",
        "link": "https://www.shopier.com/fokomersin/45894754",
        "price": "750,00 TL",
        "id": 45894754
    },
    {
        "name": "VERSACE EROS Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_75e5592164bb5b32e5ac431c36a8f352.png",
        "link": "https://www.shopier.com/fokomersin/45893920",
        "price": "750,00 TL",
        "id": 45893920
    },
    {
        "name": "AMOUAGE BEACH HUT Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_fb3c631fa9e607825f3e56eb17e320c6.png",
        "link": "https://www.shopier.com/fokomersin/45905710",
        "price": "1.500,00 TL",
        "id": 45905710
    },
    {
        "name": "FREDERIC MALLE CARNAL FLOWER Unisex 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_64ce55f0fbbfc489af1c3b1852a54e4d.png",
        "link": "https://www.shopier.com/fokomersin/45906023",
        "price": "750,00 TL",
        "id": 45906023
    },
    {
        "name": "PRADA LUNA ROSSA CARBON Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_a8420b6db19b72a5962d26fd2b1ab4b1.png",
        "link": "https://www.shopier.com/fokomersin/45905942",
        "price": "1.000,00 TL",
        "id": 45905942
    },
    {
        "name": "GIORGIO ARMANI SÌ Kadın Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_f6fbc7cc1a67a0600a17128b5545fddd.png",
        "link": "https://www.shopier.com/fokomersin/45894015",
        "price": "750,00 TL",
        "id": 45894015
    },
    {
        "name": "Parfums de Marly Althaïr  50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2b681c95a26cc969d386db9f53196f31.png",
        "link": "https://www.shopier.com/fokomersin/46320626",
        "price": "750,00 TL",
        "id": 46320626
    },
    {
        "name": "CREED AVENTUS Erkek Parfümü muadili (100 ml) | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_97c0b94e6678e776b3cacc6afd2c17a6.png",
        "link": "https://www.shopier.com/fokomersin/45824689",
        "price": "3.000,00 TL",
        "id": 45824689
    },
    {
        "name": "HUGO BOSS BOSS BOTTLED ABSOLU ERKEK PARFÜMÜ 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_c4c9dc758e7621fc72e64d1182089603.png",
        "link": "https://www.shopier.com/fokomersin/46326916",
        "price": "999,00 TL",
        "id": 46326916
    },
    {
        "name": "HERMES BARENIA Kadın Parfüm Muadili 100ML | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_6dabd88949c4aee0968799d4e06de2aa.png",
        "link": "https://www.shopier.com/fokomersin/45858963",
        "price": "3.000,00 TL",
        "id": 45858963
    },
    {
        "name": "YVES SAINT LAURENT LIBRE 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_526e4163b4eaedc1c90964e2da031343.png",
        "link": "https://www.shopier.com/fokomersin/46320787",
        "price": "750,00 TL",
        "id": 46320787
    },
    {
        "name": "STRONGER WITH YOU ABSOLUTELY Erkek Parfümü 100ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_70bd0193df0c017e71a6e9a415ffa1d1.png",
        "link": "https://www.shopier.com/fokomersin/45865495",
        "price": "2.000,00 TL",
        "id": 45865495
    },
    {
        "name": "HUGO BOSS NUMBER ONE ERKEK PARFÜMÜ 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_297543285f3e1a1e9a2e07c17baa5f41.png",
        "link": "https://www.shopier.com/fokomersin/46327173",
        "price": "750,00 TL",
        "id": 46327173
    },
    {
        "name": "XERJOFF 1861 NAXOS Uniseks 30ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_56bafb97c0ef9ac5e577e1043333eb5c.png",
        "link": "https://www.shopier.com/fokomersin/46151173",
        "price": "1.000,00 TL",
        "id": 46151173
    },
    {
        "name": "SCANDAL Kadın Parfümü 50ML | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_e1ac1c5a6fc1b97c8b3c79c753382081.png",
        "link": "https://www.shopier.com/fokomersin/45859589",
        "price": "1.000,00 TL",
        "id": 45859589
    },
    {
        "name": "AMOUAGE PURPOSE 50 Unisex 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_1e697a33bdb715f5dc222225e71efbb9.png",
        "link": "https://www.shopier.com/fokomersin/46327647",
        "price": "1.500,00 TL",
        "id": 46327647
    },
    {
        "name": "BY KILIAN ANGELS&#039; SHARE Unisex Parfüm 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_f3731615883996d32997af740af7e469.png",
        "link": "https://www.shopier.com/fokomersin/45895422",
        "price": "1.000,00 TL",
        "id": 45895422
    },
    {
        "name": "INITIO PARFUMS PRIVES NARCOTIC DELIGHT Unisex 50 ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_62e3913d4e7bdbcfdc8422dcf55f2581.png",
        "link": "https://www.shopier.com/fokomersin/46327433",
        "price": "750,00 TL",
        "id": 46327433
    },
    {
        "name": "MANCERA PARIS HINDU KUSH Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_8af65b925dbd6932ab4fb9425dd1876e.png",
        "link": "https://www.shopier.com/fokomersin/45905656",
        "price": "1.000,00 TL",
        "id": 45905656
    },
    {
        "name": "PARFUMS DE MARLY DELINA EXCLUSIF Kadın Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_8138c2df2213c50d791ace570eb51880.png",
        "link": "https://www.shopier.com/fokomersin/45895216",
        "price": "1.500,00 TL",
        "id": 45895216
    },
    {
        "name": "MONTALE CHOCOLATE GREEDY Unisex Parfüm  | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_7a04dc5a52a314dc2aa11018d0bca427.png",
        "link": "https://www.shopier.com/fokomersin/45894522",
        "price": "750,00 TL",
        "id": 45894522
    },
    {
        "name": "PARFUMS DE MARLY PEGASUS Erkek Parfümü 100ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_a4c581929c232531e49902a5aa4e9276.png",
        "link": "https://www.shopier.com/fokomersin/45866192",
        "price": "1.999,00 TL",
        "id": 45866192
    },
    {
        "name": "JEAN PAUL GAULTIER LE MALE ELIXIR Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_5634eaaf95c903f5d42cf144c8fadc63.png",
        "link": "https://www.shopier.com/fokomersin/46320406",
        "price": "750,00 TL",
        "id": 46320406
    },
    {
        "name": "AMOUAGE GUIDANCE 46  Unisex 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_dee64393a88b5d4c1763086694d13fe5.png",
        "link": "https://www.shopier.com/fokomersin/46326149",
        "price": "999,00 TL",
        "id": 46326149
    },
    {
        "name": "ABERCROMBIE &amp; FITCH FIRST INSTINCT Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_a0428a703dbc1e86adbf59e29376e97d.png",
        "link": "https://www.shopier.com/fokomersin/45894804",
        "price": "750,00 TL",
        "id": 45894804
    },
    {
        "name": "AMOUAGE REFLECTION 45 Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_56abf5b833641c7de98ec13a07435bf1.png",
        "link": "https://www.shopier.com/fokomersin/45895087",
        "price": "750,00 TL",
        "id": 45895087
    },
    {
        "name": "STÉPHANE HUMBERT LUCAS GOD OF FIRE Unisex 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_c3222b2bc3ebed96cfefa7d04160e9ab.png",
        "link": "https://www.shopier.com/fokomersin/45894660",
        "price": "1.000,00 TL",
        "id": 45894660
    },
    {
        "name": "GIORGIO ARMANI BLACK CODE Erkek Parfümü 100 ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_b67b230628ae60a4d00dbc944dac3589.png",
        "link": "https://www.shopier.com/fokomersin/46315284",
        "price": "1.250,00 TL",
        "id": 46315284
    },
    {
        "name": "AZZARO Erkek Parfümü 30 ML | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_d3e969085845f58997da9651c90b982d.png",
        "link": "https://www.shopier.com/fokomersin/45859458",
        "price": "1.000,00 TL",
        "id": 45859458
    },
    {
        "name": "TIZIANA TERENZI HALLEY Unisex Parfüm  | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2d22fa24c95256fdefaad2a0fd31caed.png",
        "link": "https://www.shopier.com/fokomersin/45865694",
        "price": "3.000,00 TL",
        "id": 45865694
    },
    {
        "name": "CHRISTIAN DIOR MISS DIOR BLOOMING BOUQUET Kadın Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_3b64b81aaeab5bba84f1d96e9ce93212.png",
        "link": "https://www.shopier.com/fokomersin/46315629",
        "price": "750,00 TL",
        "id": 46315629
    },
    {
        "name": "THIERRY MUGLER ALIEN Kadın Parfümü | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_c294c291b2d827734ac63a9f7781d7c2.png",
        "link": "https://www.shopier.com/fokomersin/45893431",
        "price": "750,00 TL",
        "id": 45893431
    },
    {
        "name": "FREDERIC MALLE PORTRAIT OF A LADY Kadın Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_1f5332f0cceb4331b91701824cd2b1cb.png",
        "link": "https://www.shopier.com/fokomersin/45893795",
        "price": "750,00 TL",
        "id": 45893795
    },
    {
        "name": "BVLGARI JASMIN NOIR Kadın Parfümü 50 ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_85a4a21a7810bac81256bf4d37b31fcb.png",
        "link": "https://www.shopier.com/fokomersin/45907375",
        "price": "750,00 TL",
        "id": 45907375
    },
    {
        "name": "AMOUAGE REFLECTION MAN Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_703208c4465269b5711fca5d7e16245f.png",
        "link": "https://www.shopier.com/fokomersin/45894467",
        "price": "750,00 TL",
        "id": 45894467
    },
    {
        "name": "CREED VIRGIN ISLAND WATER Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_87dc00f29c9e997c13788527f02277d6.png",
        "link": "https://www.shopier.com/fokomersin/45894413",
        "price": "750,00 TL",
        "id": 45894413
    },
    {
        "name": "LALIQUE ENCRE NOIRE POUR HOMME Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_464e5117fb9dca7959bf82ddff2c8218.png",
        "link": "https://www.shopier.com/fokomersin/45890567",
        "price": "1.999,00 TL",
        "id": 45890567
    },
    {
        "name": "PACO RABANNE 1 MILLION Erkek Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_b552f4c7231fc6eb7a1cb666f408762a.png",
        "link": "https://www.shopier.com/fokomersin/45890360",
        "price": "1.500,00 TL",
        "id": 45890360
    },
    {
        "name": "MEMO PARIS LALIBELA OUD Unisex Parfüm 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_a1f848fe2b61571b7fd44ba0393ed01b.png",
        "link": "https://www.shopier.com/fokomersin/45907154",
        "price": "750,00 TL",
        "id": 45907154
    },
    {
        "name": "KİRKE Parfüm 30ML | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_9f676085f17707b564a8a1bb84a2b02c.png",
        "link": "https://www.shopier.com/fokomersin/45859274",
        "price": "1.000,00 TL",
        "id": 45859274
    },
    {
        "name": "AMOUAGE INTERLUDE 53 Unisex Parfüm  50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_135313ca37d699f666a6f52ec62ac165.png",
        "link": "https://www.shopier.com/fokomersin/45895145",
        "price": "1.000,00 TL",
        "id": 45895145
    },
    {
        "name": "XERJOFF ERBA PURA Uniseks Parfüm muadili (100 ML) | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_60925e1c23876058260f91a1f9649fbc.png",
        "link": "https://www.shopier.com/fokomersin/45824474",
        "price": "3.000,00 TL",
        "id": 45824474
    },
    {
        "name": "MEMO PARIS ARGENTINA Unisex Parfüm 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_3014e0a64fff3c582f3e7ff4f1410a53.png",
        "link": "https://www.shopier.com/fokomersin/45894986",
        "price": "1.000,00 TL",
        "id": 45894986
    },
    {
        "name": "PRADA PARADOXE Kadın Parfümü 50ml | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_3b3ed98c36c88378f3b05425f3718773.png",
        "link": "https://www.shopier.com/fokomersin/45894902",
        "price": "750,00 TL",
        "id": 45894902
    },
    {
        "name": "LANCÔME HYPNOSE Kadın Parfümü 50ML | Foko Mersin",
        "category": "muadil",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_4c0421f741c411d7e8cbcbb21445be61.png",
        "link": "https://www.shopier.com/fokomersin/45867295",
        "price": "999,00 TL",
        "id": 45867295
    },
    {
        "name": "SBR Series Kepek Karşıtı Şampuan   | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_e2a6994d841ab69607a49456dc74659d.png",
        "link": "https://www.shopier.com/fokomersin/40864638",
        "price": "450,00 TL",
        "id": 40864638
    },
    {
        "name": "KADINLAR İÇİN DÖKÜLME KARŞITI BAKIM ŞAMPUANI | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_7c74699306b52ec35cda7990d042bb1e.png",
        "link": "https://www.shopier.com/fokomersin/40840717",
        "price": "375,00 TL",
        "id": 40840717
    },
    {
        "name": "Cuti Fix Saç Onarım Seti | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_775ac5a1c3a64b1375a73f0e8d59d92c.png",
        "link": "https://www.shopier.com/fokomersin/40864445",
        "price": "1.999,00 TL",
        "id": 40864445
    },
    {
        "name": "NEMLENDİRİCİ BAKIM ŞAMPUANI  | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_d3d14618a4a5851728188d8ee36f9e3e.jpeg",
        "link": "https://www.shopier.com/fokomersin/44495003",
        "price": "375,00 TL",
        "id": 44495003
    },
    {
        "name": "Pro Kepek Şampuanı | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_6d0fd128ee51ab27d97416e7dfce4873.png",
        "link": "https://www.shopier.com/fokomersin/40864425",
        "price": "375,00 TL",
        "id": 40864425
    },
    {
        "name": "Molecules Erkekler İçin Dökülme Karşıtı Saç Bakım Serumu | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2162e002d2540baa56605696c07dcf75.jpeg",
        "link": "https://www.shopier.com/fokomersin/43517161",
        "price": "375,00 TL",
        "id": 43517161
    },
    {
        "name": "Saç Derisi Peeling Serum | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_df8c3a59a70a33689ba37b8fd84b1e51.jpeg",
        "link": "https://www.shopier.com/fokomersin/44492988",
        "price": "300,00 TL",
        "id": 44492988
    },
    {
        "name": "Boyalı Saçlar İçin Bakım Şampuanı | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_429ace73653b6881ca187c2fba396a50.png",
        "link": "https://www.shopier.com/fokomersin/40864490",
        "price": "375,00 TL",
        "id": 40864490
    },
    {
        "name": "Yağlı Saçlar İçin Bakım Şampuanı | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_3862ae0d0dd9e5272f4f361d311b94fe.png",
        "link": "https://www.shopier.com/fokomersin/40864469",
        "price": "375,00 TL",
        "id": 40864469
    },
    {
        "name": "Saç Bakım Şampuanı | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_151abdea0a48a4848bbc2307c9ee3882.png",
        "link": "https://www.shopier.com/fokomersin/40864663",
        "price": "375,00 TL",
        "id": 40864663
    },
    {
        "name": "Saç Sorunu Yaşayan Erkekler İçin Set | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_5ad778731867ae897fbfc14c72c4263e.jpeg",
        "link": "https://www.shopier.com/fokomersin/44523922",
        "price": "1.850,00 TL",
        "id": 44523922
    },
    {
        "name": "Dökülme Karşıtı Set (Kadınlar İçin) | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_0db4dc843d3c9f856f4941e6f9ccee0b.png",
        "link": "https://www.shopier.com/fokomersin/43517421",
        "price": "750,00 TL",
        "id": 43517421
    },
    {
        "name": "Günlük Kepek Şampuanı | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2504672306c7f7576d8cb8a00dd9bc94.png",
        "link": "https://www.shopier.com/fokomersin/40864403",
        "price": "375,00 TL",
        "id": 40864403
    },
    {
        "name": "Erkekler İçin Dökülme Karşıtı Bakım Şampuanı | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_d082e5d091c032c90302bda7b8debd63.jpeg",
        "link": "https://www.shopier.com/fokomersin/40864561",
        "price": "375,00 TL",
        "id": 40864561
    },
    {
        "name": "Kadınlar İçin Dökülme Karşıtı Bakım Serumu | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_78e1dec0f0c6178cb6b505fc88a89d34.png",
        "link": "https://www.shopier.com/fokomersin/44228052",
        "price": "375,00 TL",
        "id": 44228052
    },
    {
        "name": "BEYAZ SAÇLAR İÇİN SAÇ DERİSİ BAKIM SERUMU | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_943600ef97809d2ed89ed62f10aa541a.jpeg",
        "link": "https://www.shopier.com/fokomersin/44495564",
        "price": "500,00 TL",
        "id": 44495564
    },
    {
        "name": "SAÇ DERİSİ BAKIM YAĞI 30 ML  | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_e9e4d0e0994f8fc73658ff9702a6b7aa.jpeg",
        "link": "https://www.shopier.com/fokomersin/44493184",
        "price": "400,00 TL",
        "id": 44493184
    },
    {
        "name": "Keratinli Saç Maskesi | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_96dde4effc41a41dc3bf272380e0953f.jpeg",
        "link": "https://www.shopier.com/fokomersin/40864602",
        "price": "500,00 TL",
        "id": 40864602
    },
    {
        "name": "Saç Derisi Nemlendirici Serum | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_0353c65401a2b3618ffab431799f1e29.jpeg",
        "link": "https://www.shopier.com/fokomersin/45396632",
        "price": "300,00 TL",
        "id": 45396632
    },
    {
        "name": "Kadınlar İçin Saç Dökülmesi Bakım Seti | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_bf095040e28bb44844555be344b0051d.jpeg",
        "link": "https://www.shopier.com/fokomersin/45116215",
        "price": "1.000,00 TL",
        "id": 45116215
    },
    {
        "name": "Kepek Karşıtı Şampuan | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_def09173a26e5898381d2e2b3590b2a3.png",
        "link": "https://www.shopier.com/fokomersin/40864622",
        "price": "375,00 TL",
        "id": 40864622
    },
    {
        "name": "Erkekler İçin Dökülmeye Karşı Bakım Seti | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_4843d3e9cb99b76193d4a9e1a402284d.jpeg",
        "link": "https://www.shopier.com/fokomersin/45115476",
        "price": "1.000,00 TL",
        "id": 45115476
    },
    {
        "name": "Kepek Karşıtı Bakım Seti | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_2ab7be6274c1fdf1836892127faf04d7.png",
        "link": "https://www.shopier.com/fokomersin/44289541",
        "price": "1.200,00 TL",
        "id": 44289541
    },
    {
        "name": "MELATONİN SAÇ DERİSİ SERUMU | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_f02dbc8b5a7e3d6eb274a0ae13106d98.jpeg",
        "link": "https://www.shopier.com/fokomersin/44495516",
        "price": "400,00 TL",
        "id": 44495516
    },
    {
        "name": "Kepek Karşıtı Saç Bakım Seti | Foko Mersin",
        "category": "sac",
        "image": "https://cdn.shopier.app/pictures_large/fokomersin_19cfee8739772c2251ff0384e45b3a30.jpeg",
        "link": "https://www.shopier.com/fokomersin/45116861",
        "price": "1.000,00 TL",
        "id": 45116861
    }
];

    const categoryNames = {
        'serum': 'Serum ve Damlalar',
        'krem': 'Kremler',
        'sac': 'Saç Bakımı',
        'set': 'Özel Setler',
        'parfum': 'Orijinal Parfümler (Kadın/Erkek)',
        'muadil': 'Muadil Parfümler',
        'nish': 'Nish Kokular'
    }

    const container = document.getElementById('product-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');

    if(container) {
        function renderProducts(filter = 'all') {
            container.innerHTML = ''; 
            
            const filtered = filter === 'all' 
                ? products 
                : products.filter(p => p.category === filter);

            filtered.forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.style.cursor = 'pointer';
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
                
                const catName = categoryNames[p.category] || "Ürün";

                card.innerHTML = `
                    <div class="product-img-wrapper" style="background-color: #f9f9f9;">
                        <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.src='foko-about.png';">
                    </div>
                    <div class="product-info">
                        <span class="product-cat">${catName}</span>
                        <h3 class="product-name">${p.name}</h3>
                        <p class="product-price" style="font-weight: 600; font-size: 1.1rem; color: var(--clr-primary); margin-top: 0.5rem; margin-bottom: 0.5rem;">${p.price ? p.price : ''}</p>
                        <div class="product-action">
                            <span style="font-size: 0.9em; margin-right: 0.3rem;">Hızlı Bakış</span>
                            <ion-icon name="eye-outline"></ion-icon>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => { if(window.openQuickView) window.openQuickView(p); });
                container.appendChild(card);
            });
        }

        renderProducts();

        function activateFilter(filter) {
            filterBtns.forEach(b => b.classList.remove('active'));
            // find btn with this filter
            const targetBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if(targetBtn) targetBtn.classList.add('active');
            renderProducts(filter);
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                activateFilter(filter);
            });
        });
        
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const filter = card.getAttribute('data-category');
                activateFilter(filter);
                document.getElementById('products-grid-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
});

/* =========================================
   YENİ BİLEŞENLER / ETKİLEŞİMLER
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    // --- FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const q = item.querySelector('.faq-q');
        if(q) {
            q.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if(!isActive) item.classList.add('active');
            });
        }
    });

    // --- UI ELEMENTS ---
    const overlay = document.getElementById('ui-overlay');
    const qvModal = document.getElementById('quick-view-modal');
    const qvClose = document.getElementById('qv-close-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartClose = document.getElementById('cart-close-btn');
    const navCartBtns = document.querySelectorAll('.nav-icon-cart'); 
    
    // Quick View Data
    const qvImg = document.getElementById('qv-img');
    const qvCat = document.getElementById('qv-cat');
    const qvTitle = document.getElementById('qv-title');
    const qvPrice = document.getElementById('qv-price');
    const qvShopierBtn = document.getElementById('qv-shopier-btn');
    const qvAddBtn = document.getElementById('qv-add-btn');
    let currentQvProduct = null;
    
    // Cart Data
    let cart = JSON.parse(localStorage.getItem('doa_cart')) || [];
    const cartBadge = document.querySelectorAll('.cart-badge');
    const cartBody = document.getElementById('cart-body');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    function closeAllUI() {
        if(overlay) overlay.classList.remove('active');
        if(qvModal) qvModal.classList.remove('active');
        if(cartDrawer) cartDrawer.classList.remove('active');
    }

    if(overlay) overlay.addEventListener('click', closeAllUI);
    if(qvClose) qvClose.addEventListener('click', closeAllUI);
    if(cartClose) cartClose.addEventListener('click', closeAllUI);
    
    navCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    });

    function openCartDrawer() {
        if(qvModal) qvModal.classList.remove('active');
        if(overlay) overlay.classList.add('active');
        if(cartDrawer) cartDrawer.classList.add('active');
        renderCart();
    }

    window.openQuickView = function(product) {
        if(!qvModal || !overlay) return;
        currentQvProduct = product;
        qvImg.src = product.image;
        qvCat.textContent = product.category.toUpperCase();
        qvTitle.textContent = product.name;
        qvPrice.textContent = product.price || '';
        qvShopierBtn.href = product.link;
        
        if(cartDrawer) cartDrawer.classList.remove('active');
        overlay.classList.add('active');
        qvModal.classList.add('active');
    }

    if(qvAddBtn) {
        qvAddBtn.addEventListener('click', () => {
            if(currentQvProduct) {
                addToCart(currentQvProduct);
                closeAllUI();
                setTimeout(() => { openCartDrawer(); }, 300);
            }
        });
    }

    function addToCart(product) {
        const existing = cart.find(item => item.link === product.link);
        if(existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        saveCart();
    }

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }

    function saveCart() {
        localStorage.setItem('doa_cart', JSON.stringify(cart));
        updateCartBadge();
    }

    function updateCartBadge() {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartBadge.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.transform = 'scale(1.3)';
            setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
        });
    }
    
    function parsePrice(str) {
        if(!str) return 0;
        let val = str.replace(/[^\d]/g, '');
        return val ? parseInt(val, 10) : 0;
    }

    function renderCart() {
        if(!cartBody || !cartTotalPrice) return;
        
        if(cart.length === 0) {
            cartBody.innerHTML = '<div class="cart-empty-msg">Sepetiniz şu anda boş. Taze ürünleri keşfedin!</div>';
            cartTotalPrice.textContent = '0 TL';
            return;
        }

        let html = '';
        let total = 0;

        cart.forEach((item, index) => {
            let itemTotal = parsePrice(item.price) * item.qty;
            total += itemTotal;
            
            html += `
                <div class="cart-item">
                    <img src="${item.image}" class="cart-item-img" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div style="font-size: 0.8rem; color:#888; margin-bottom: 5px;">Adet: ${item.qty}</div>
                        <div class="cart-item-price">${item.price}</div>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})">Kaldır</button>
                    </div>
                </div>
            `;
        });

        cartBody.innerHTML = html;
        cartTotalPrice.textContent = total.toLocaleString('tr-TR') + ' TL';
    }

    updateCartBadge(); // init on load
});

/* =========================================
   MOBİL NAV DROPDOWN TOUCH DESTEĞİ
   ========================================= */
(function() {
    function isTouchDevice() {
        return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    }

    if (!isTouchDevice()) return;

    const dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(function(dropdown) {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        const submenu = dropdown.querySelector('.nav-submenu');

        if (!toggle || !submenu) return;

        toggle.addEventListener('click', function(e) {
            const isOpen = submenu.style.display === 'block';

            // Close all other open submenus
            dropdowns.forEach(function(d) {
                const s = d.querySelector('.nav-submenu');
                if (s) s.style.display = 'none';
            });

            if (!isOpen) {
                submenu.style.display = 'block';
                e.preventDefault(); // Prevent navigating when opening menu
            }
            // If already open, it was just closed — let any link within handle navigation
        });
    });

    // Close submenus when tapping outside the nav
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            dropdowns.forEach(function(d) {
                const s = d.querySelector('.nav-submenu');
                if (s) s.style.display = 'none';
            });
        }
    });
})();

