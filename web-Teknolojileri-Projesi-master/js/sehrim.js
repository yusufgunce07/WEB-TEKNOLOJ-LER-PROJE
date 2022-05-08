let yerler = [{baslik:'HASANKEYF', description:'Hısnkeyfa olan bu şehrin adı “Kayahisarı” şeklinde tercüme edilir. Eski tarih ve kavimlerden bu tür kelimelerin anlamı “korunmaya musait” yer anlamına geldiği belirtilmektedir. Kalenin yekpare taştan olmasından dolayı çeşitli dillerdeki Hasankeyf ifadesi “Taş Kalesi” manasına gelmektedir. Hasankeyf’in ne zaman kurulduğu, şimdiye kadar karanlıkta kalmış, eldeki bilgi ve verilerin yeterli olmaması nedeniyle kuruluşu hakkındaki görüşler , bir ihtimal olmaktan öteye gitmemiştir. Şehrin jeopolitik yapısı, önemi ve mesken olarak kullanılan çok sayıdaki mağaraların, Hasankeyf’in çok eski bir yerleşim merkezi olduğunu gösterir. Hasankeyf tarihi antik döneme kadar dayanmaktadır. Hasankeyf; Diyarbakır ve Cizre şehirleri arasında önemli bir kara ve su yolu güzergahında olup, savaşların olmaması ve ticaret yollarının burdan geçmesi bir yerde Hasankeyf’i kültürleri kavşak noktası haline getirmiştir.',resim: '../pictures/sehrim/sm_circir.jpg', konum: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12625.196224695766!2d41.40941623573038!3d37.71265767633101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400b0c853d00283f%3A0x5b676a7c895c6c87!2sHasankeyf%2C%20Batman!5e0!3m2!1str!2str!4v1651850859568!5m2!1str!2str'},
{baslik:'Hıdır Bey Camii', description:'Batman’ın Kozluk ilçe merkezinde bulunan Hızır Bey Camii, ilçenin en büyük camisidir. Miladi 1512 yılında Sason ve Hezo (Kozluk) Beyi Ebubekir Roşkinin oğlu Hızır Bey tarafından yaptırıldığı mevcut kitabesinde ifade edilmektedir.',resim: '../pictures/sehrim/sm_sivrice.jpg' , konum:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.6592010529284!2d41.48480981532976!3d38.19458967968511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400cb1659bb89a33%3A0x6e00f54285517209!2zSMSxZMSxciBCZXkgY2FtaWk!5e0!3m2!1str!2str!4v1651851017733!5m2!1str!2str'},
{baslik:'Mor Kiryakus Manastırı', description:'İlk çağdaki sınırları Dicle Nehrinin güney kıyısından başlayıp Suriye sınırına kadar uzanan ve dini yönetim açısından Hasankeyf’teki Piskoposluğa bağlı olan bölgeye Turabidin denilmektedir. Süryani Hıristiyanları tarafından kutsal kabul edilen Turabidin bölgesinin en uç noktasındaki Mor Kiryakus manastırı, bu bölgede yer alan 80’e yakın kilise ve manastır içinde önemli bir yer tutmaktadır. Manastıra girişteki ana kapı üzerinde ve iç avluyu iki bölüme ayıran kemerli kapının üzerinde olmak üzere Süryanice yazılmış iki taş kitabe mevcuttur. İlk kitabede Haleb’li Salibo isimli bir şahıstan bahsedilmekte ancak, manastırın yapım tarihi hakkında bir bilgi verilmemektedir. Çünkü Süryani Hıristiyanları inşa ettikleri manastır ve kiliselerinde kullandıkları kitabeleri tarih veren bir belge olmasından ziyade, İncil’den insanlara mesaj veren dini içerikli birer ilahi metin olmasını hep tercih etmişlerdir. Bu manastırda görülen her iki kitabe de birer ilahi metindir.',resim: '../pictures/sehrim/sehrim/sm_karaleylek3.jpg', konum: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404589.4520358581!2d41.121304538523894!3d37.60556925590952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400b432867bacca9%3A0x4bda95e4b07e8645!2sMor%20kuryakos%20manast%C4%B1r%C4%B1!5e0!3m2!1str!2str!4v1651850791718!5m2!1str!2str' },
{baslik:'Malabadi', description:'Malabadi Köprüsünün üzerindeki kitabeye göre köprü 1147 Yılında, yani Artukoğulları Beyliği döneminde Timurtaş Bin-i İlgazi adlı kişi tarafından yapılmıştır. Köprünün eni 7 metre, uzunluğu ise 150 metredir. İnşasında renkli taşlar kullanılmıştır. Dünyadaki taş köprüler içinde kemer açıklığı en fazla olan köprüdür.',resim: '../pictures/sehrim/sm_hazarbaba.jpg', konum:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.4293809820783!2d41.20168631532857!3d38.15345937969226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4073552d6cc77e81%3A0x22d74596db664702!2zTWFsYWJhZGkgS8O2cHLDvHPDvA!5e0!3m2!1str!2str!4v1651850639227!5m2!1str!2str'}];
let yerismi= document.getElementById('yerismi');
let ileriButton= document.getElementById('ileri');
let geriButton= document.getElementById('geri');
let description= document.getElementById('description');
let resim= document.getElementById('resim');
let konum= document.getElementById('konum');
let indis =0    
yerismi.innerText=yerler[indis].baslik
description.innerText=yerler[indis].description
resim.src=yerler[indis].resim
konum.src=yerler[indis].konum

ileriButton.addEventListener('click', function() {
    if(indis<3)
    {
        indis++
    }
    else{
        indis=0
    }
        
    yerismi.innerText=yerler[indis].baslik
    description.innerText=yerler[indis].description
    resim.src=yerler[indis].resim
    konum.src=yerler[indis].konum

})

geriButton.addEventListener('click', function() {
    if(indis>=1)
    {
        indis--
    }
    else{
        indis=3
    }
        
    yerismi.innerText=yerler[indis].baslik
    description.innerText=yerler[indis].description
    resim.src=yerler[indis].resim
    konum.src=yerler[indis].konum

})