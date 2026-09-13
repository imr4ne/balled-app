(function(){

  // =========================================================
  // TRANSLATIONS
  // =========================================================
  const translations = {
    fr: {
      search_placeholder:"Rechercher une marque, un article…",
      fav_title:"Favoris", msg_title:"Messages", sell_btn:"Vendre un article",
      login_btn:"Connexion",
      hero_eyebrow:"Déjà 12 400 objets sauvés cette semaine",
      hero_title_html:"Ta prochaine pièce préférée<br> a déjà <em>une histoire</em>",
      hero_lead:"Achète, vends et donne une seconde vie à des vêtements, chaussures et accessoires uniques — en quelques minutes, entre particuliers.",
      hero_cta_sell:"Déposer un article", hero_cta_browse:"Explorer le catalogue",
      stat_items:"articles en ligne", stat_members:"membres actifs",
      stat_satisfaction:"satisfaction acheteurs", stat_cod:"paiement à la livraison",
      fc1_title:"Blouson denim", fc2_title:"Sneakers blanches", fc3_title:"Sac cuir camel",
      section_title_default:"Sélectionné pour toi",
      section_sub:"Basé sur les nouveautés et les articles les plus enregistrés",
      load_more:"Voir plus d'articles",
      how_title:"Comment ça marche",
      how1_title:"Dépose ton article",
      how1_desc:"Prends quelques photos, ajoute une description et fixe ton prix en moins de 5 minutes.",
      how2_title:"Échange et acompte",
      how2_desc:"Réponds aux questions, accepte une offre. L'acheteur verse un petit acompte pour confirmer la commande — il te reste acquis en cas de refus à la livraison.",
      how3_title:"Livraison et paiement à la réception",
      how3_desc:"L'acheteur paie en espèces ou par carte directement au livreur, à la réception du colis — toi tu es réglé juste après.",
      cta_title:"Ton dressing a de la valeur.",
      cta_desc:"Des milliers de vêtements dorment dans les placards partout au Maroc. Donne-leur une seconde vie et gagne un peu d'argent au passage.",
      cta_btn:"Commencer à vendre",
      footer_tagline:"Achète. Vends. Donne une seconde vie. La marketplace de la mode d'occasion entre particuliers.",
      footer_col1_title:"Balled", footer_col1_l1:"À propos", footer_col1_l2:"Carrières", footer_col1_l3:"Presse", footer_col1_l4:"Impact",
      footer_col2_title:"Aide", footer_col2_l1:"Comment vendre", footer_col2_l2:"Comment acheter", footer_col2_l3:"Livraison",
      footer_col2_l4:"Paiement à la livraison", footer_col2_l5:"Acomptes et frais de service",
      footer_col3_title:"Suivre",
      footer_bottom_rights:"© 2026 balled. Tous droits réservés.",
      footer_bottom_links:"Conditions générales · Confidentialité · Cookies",
      sell_modal_title:"Déposer un nouvel article",
      sell_modal_sub:"Renseigne quelques informations — il sera visible immédiatement dans le catalogue.",
      f_photos_label:"Photos (jusqu'à 6)",
      f_title_label:"Titre de l'article", f_title_placeholder:"Ex. Pull en laine mérinos",
      f_brand_label:"Marque", f_brand_placeholder:"Ex. Sézane",
      f_price_label:"Prix (DH)", f_price_placeholder:"Ex. 250",
      f_category_label:"Catégorie", f_condition_label:"État",
      f_size_label:"Taille", f_size_placeholder:"Ex. M, 38, 41...",
      f_desc_label:"Description", f_desc_placeholder:"Décris la matière, la coupe, les éventuels défauts…",
      publish_btn:"Publier l'article",
      published_toast:"Ton article est en ligne !",
      all_conditions:"Tous les états",
      fav_added:"Ajouté à tes favoris", fav_removed:"Retiré de tes favoris",
      fav_empty:"Tu n'as pas encore de favoris",
      fav_section_title:"Tes favoris",
      empty_title:"Aucun article trouvé",
      empty_sub:"Essaie une autre catégorie ou un autre mot-clé.",
      size_label:"Taille",
      fav_tooltip:"Ajouter aux favoris",
      cod_note:"Paiement à la livraison — un acompte confirme ta commande, le reste se paie au livreur",
      seller_meta:"★ {rating} · {city}",
      offer_btn:"Faire une offre", buy_btn_prefix:"Commander ·", message_seller_btn:"Message",
      offer_prompt:"Propose un montant en DH",
      offer_message:(amount)=>`Bonjour, je vous propose ${amount} DH pour cet article. Est-ce possible ?`,
      offer_sent:"Ton offre a été envoyée en message au vendeur",
      checkout_article:"Article", checkout_fee:"Frais de service", checkout_total:"Total",
      checkout_deposit_label:"Acompte à payer maintenant", checkout_due_label:"Reste à payer au livreur",
      checkout_note:(seller)=>`L'acompte confirme ta commande auprès de ${seller} et n'est pas remboursé en cas de refus du colis à la livraison. Il est déduit du prix final.`,
      checkout_address_label:"Adresse de livraison", checkout_address_placeholder:"Adresse, quartier, ville",
      checkout_city_label:"Ville", checkout_city_placeholder:"Ex. Casablanca",
      checkout_back:"Retour", checkout_confirm_prefix:"Payer l'acompte de",
      checkout_address_missing:"Ajoute une adresse de livraison",
      checkout_success:"Commande confirmée ! Retrouve-la dans « Mes achats ».",
      currency:"DH",
      categories:{all:"Tout",women:"Femme",men:"Homme",kids:"Enfant",shoes:"Chaussures",accessories:"Accessoires",home:"Maison"},
      conditions:{new_tag:"Neuf avec étiquette",very_good:"Très bon état",good:"Bon état",fair:"Satisfaisant"},
      cat_icons:{all:"✦",women:"👗",men:"👕",kids:"🧸",shoes:"👟",accessories:"👜",home:"🏺"},
      order_status:{pending_deposit:"Acompte en attente",confirmed:"Confirmée",shipped:"Expédiée",delivered:"Livrée",refused:"Refusée",cancelled:"Annulée",sold:"Vendu",active:"En ligne",archived:"Archivé"},
      auth_login_tab:"Connexion", auth_register_tab:"Créer un compte",
      auth_email_label:"Email", auth_password_label:"Mot de passe", auth_name_label:"Nom complet", auth_city_label:"Ville",
      auth_login_btn:"Se connecter", auth_register_btn:"Créer mon compte", auth_logout_btn:"Se déconnecter",
      auth_required_toast:"Connecte-toi pour continuer",
      login_success:"Connexion réussie", register_success:"Compte créé avec succès", logout_success:"Déconnecté",
      account_tab_listings:"Mes annonces", account_tab_purchases:"Mes achats", account_tab_sales:"Mes ventes",
      no_listings_yet:"Tu n'as pas encore publié d'annonce.",
      no_purchases_yet:"Aucun achat pour le moment.",
      no_sales_yet:"Aucune vente pour le moment.",
      msg_select_conversation:"Sélectionne une conversation",
      msg_type_placeholder:"Écris un message…", msg_send_btn:"Envoyer",
      msg_no_conversations:"Aucune conversation pour le moment.",
      generic_error:"Une erreur est survenue. Réessaie.",
      network_error:"Impossible de contacter le serveur.",
    },
    en: {
      search_placeholder:"Search a brand, an item…",
      fav_title:"Favourites", msg_title:"Messages", sell_btn:"Sell an item",
      login_btn:"Log in",
      hero_eyebrow:"Already 12,400 items saved this week",
      hero_title_html:"Your next favourite piece<br> already has <em>a story</em>",
      hero_lead:"Buy, sell and give a second life to unique clothes, shoes and accessories — in minutes, between individuals.",
      hero_cta_sell:"List an item", hero_cta_browse:"Browse the catalogue",
      stat_items:"items listed", stat_members:"active members",
      stat_satisfaction:"buyer satisfaction", stat_cod:"cash on delivery",
      fc1_title:"Denim jacket", fc2_title:"White sneakers", fc3_title:"Camel leather bag",
      section_title_default:"Picked for you",
      section_sub:"Based on new arrivals and most-saved items",
      load_more:"Show more items",
      how_title:"How it works",
      how1_title:"List your item",
      how1_desc:"Take a few photos, add a description and set your price in under 5 minutes.",
      how2_title:"Chat and deposit",
      how2_desc:"Answer questions, accept an offer. The buyer pays a small deposit to confirm the order — it's yours to keep if they refuse the delivery.",
      how3_title:"Delivery and payment on receipt",
      how3_desc:"The buyer pays cash or card directly to the courier upon delivery — you get paid right after.",
      cta_title:"Your wardrobe has value.",
      cta_desc:"Thousands of clothes sit unused in closets across Morocco. Give them a second life and earn some money along the way.",
      cta_btn:"Start selling",
      footer_tagline:"Buy. Sell. Give a second life. The second-hand fashion marketplace between individuals.",
      footer_col1_title:"Balled", footer_col1_l1:"About", footer_col1_l2:"Careers", footer_col1_l3:"Press", footer_col1_l4:"Impact",
      footer_col2_title:"Help", footer_col2_l1:"How to sell", footer_col2_l2:"How to buy", footer_col2_l3:"Shipping",
      footer_col2_l4:"Cash on delivery", footer_col2_l5:"Deposits and service fees",
      footer_col3_title:"Follow",
      footer_bottom_rights:"© 2026 balled. All rights reserved.",
      footer_bottom_links:"Terms · Privacy · Cookies",
      sell_modal_title:"List a new item",
      sell_modal_sub:"Fill in a few details — it will be visible in the catalogue right away.",
      f_photos_label:"Photos (up to 6)",
      f_title_label:"Item title", f_title_placeholder:"e.g. Merino wool jumper",
      f_brand_label:"Brand", f_brand_placeholder:"e.g. Sézane",
      f_price_label:"Price (DH)", f_price_placeholder:"e.g. 250",
      f_category_label:"Category", f_condition_label:"Condition",
      f_size_label:"Size", f_size_placeholder:"e.g. M, 38, 41...",
      f_desc_label:"Description", f_desc_placeholder:"Describe the material, the fit, any flaws…",
      publish_btn:"Publish item",
      published_toast:"Your item is live!",
      all_conditions:"All conditions",
      fav_added:"Added to your favourites", fav_removed:"Removed from your favourites",
      fav_empty:"You don't have any favourites yet",
      fav_section_title:"Your favourites",
      empty_title:"No items found",
      empty_sub:"Try another category or keyword.",
      size_label:"Size",
      fav_tooltip:"Add to favourites",
      cod_note:"Cash on delivery — a deposit confirms your order, the rest is paid to the courier",
      seller_meta:"★ {rating} · {city}",
      offer_btn:"Make an offer", buy_btn_prefix:"Order ·", message_seller_btn:"Message",
      offer_prompt:"Suggest an amount in DH",
      offer_message:(amount)=>`Hi, I'd like to offer ${amount} DH for this item. Would that work?`,
      offer_sent:"Your offer was sent as a message to the seller",
      checkout_article:"Item", checkout_fee:"Service fee", checkout_total:"Total",
      checkout_deposit_label:"Deposit to pay now", checkout_due_label:"Balance due to courier",
      checkout_note:(seller)=>`The deposit confirms your order with ${seller} and is non-refundable if you refuse the parcel at delivery. It is deducted from the final price.`,
      checkout_address_label:"Delivery address", checkout_address_placeholder:"Address, neighbourhood, city",
      checkout_city_label:"City", checkout_city_placeholder:"e.g. Casablanca",
      checkout_back:"Back", checkout_confirm_prefix:"Pay deposit of",
      checkout_address_missing:"Add a delivery address",
      checkout_success:"Order confirmed! You'll find it under \u201cMy purchases\u201d.",
      currency:"DH",
      categories:{all:"All",women:"Women",men:"Men",kids:"Kids",shoes:"Shoes",accessories:"Accessories",home:"Home"},
      conditions:{new_tag:"New with tag",very_good:"Very good condition",good:"Good condition",fair:"Fair condition"},
      cat_icons:{all:"✦",women:"👗",men:"👕",kids:"🧸",shoes:"👟",accessories:"👜",home:"🏺"},
      order_status:{pending_deposit:"Deposit pending",confirmed:"Confirmed",shipped:"Shipped",delivered:"Delivered",refused:"Refused",cancelled:"Cancelled",sold:"Sold",active:"Live",archived:"Archived"},
      auth_login_tab:"Log in", auth_register_tab:"Create account",
      auth_email_label:"Email", auth_password_label:"Password", auth_name_label:"Full name", auth_city_label:"City",
      auth_login_btn:"Log in", auth_register_btn:"Create my account", auth_logout_btn:"Log out",
      auth_required_toast:"Log in to continue",
      login_success:"Logged in successfully", register_success:"Account created successfully", logout_success:"Logged out",
      account_tab_listings:"My listings", account_tab_purchases:"My purchases", account_tab_sales:"My sales",
      no_listings_yet:"You haven't listed anything yet.",
      no_purchases_yet:"No purchases yet.",
      no_sales_yet:"No sales yet.",
      msg_select_conversation:"Select a conversation",
      msg_type_placeholder:"Type a message…", msg_send_btn:"Send",
      msg_no_conversations:"No conversations yet.",
      generic_error:"Something went wrong. Please try again.",
      network_error:"Could not reach the server.",
    },
    ar: {
      search_placeholder:"ابحث عن ماركة أو منتج…",
      fav_title:"المفضلة", msg_title:"الرسائل", sell_btn:"بيع منتج",
      login_btn:"تسجيل الدخول",
      hero_eyebrow:"أكثر من 12,400 قطعة أُنقذت هذا الأسبوع",
      hero_title_html:"قطعتك المفضلة القادمة<br> لها بالفعل <em>قصة</em>",
      hero_lead:"اشترِ وبع وامنح حياة ثانية لملابس وأحذية وإكسسوارات فريدة — في دقائق معدودة، بين الأفراد.",
      hero_cta_sell:"أضف منتجاً", hero_cta_browse:"تصفح الكتالوج",
      stat_items:"منتج معروض", stat_members:"عضو نشط",
      stat_satisfaction:"رضا المشترين", stat_cod:"الدفع عند الاستلام",
      fc1_title:"سترة جينز", fc2_title:"سنيكرز أبيض", fc3_title:"حقيبة جلدية",
      section_title_default:"مختارات لك",
      section_sub:"بناءً على أحدث المنتجات والأكثر إضافة للمفضلة",
      load_more:"عرض المزيد من المنتجات",
      how_title:"كيف يعمل الموقع",
      how1_title:"أضف منتجك",
      how1_desc:"التقط بعض الصور، أضف وصفاً وحدد السعر في أقل من 5 دقائق.",
      how2_title:"التواصل والعربون",
      how2_desc:"أجب عن الأسئلة واقبل عرضاً. يدفع المشتري عربوناً بسيطاً لتأكيد الطلب — يبقى لك في حال رفض استلام الطرد.",
      how3_title:"التوصيل والدفع عند الاستلام",
      how3_desc:"يدفع المشتري نقداً أو بالبطاقة مباشرة لمندوب التوصيل عند استلام الطرد — وتحصل أنت على المبلغ مباشرة بعد ذلك.",
      cta_title:"خزانتك لها قيمة.",
      cta_desc:"آلاف القطع نائمة في الخزانات في جميع أنحاء المغرب. امنحها حياة ثانية واربح بعض المال في نفس الوقت.",
      cta_btn:"ابدأ البيع",
      footer_tagline:"اشترِ. بع. امنح حياة ثانية. منصة الموضة المستعملة بين الأفراد.",
      footer_col1_title:"Balled", footer_col1_l1:"من نحن", footer_col1_l2:"وظائف", footer_col1_l3:"الصحافة", footer_col1_l4:"الأثر",
      footer_col2_title:"مساعدة", footer_col2_l1:"كيفية البيع", footer_col2_l2:"كيفية الشراء", footer_col2_l3:"التوصيل",
      footer_col2_l4:"الدفع عند الاستلام", footer_col2_l5:"العربون ورسوم الخدمة",
      footer_col3_title:"تابعنا",
      footer_bottom_rights:"© 2026 balled. جميع الحقوق محفوظة.",
      footer_bottom_links:"الشروط العامة · الخصوصية · ملفات تعريف الارتباط",
      sell_modal_title:"إضافة منتج جديد",
      sell_modal_sub:"أدخل بعض المعلومات — سيظهر المنتج فوراً في الكتالوج.",
      f_photos_label:"الصور (حتى 6)",
      f_title_label:"عنوان المنتج", f_title_placeholder:"مثال: سترة صوف مارينو",
      f_brand_label:"الماركة", f_brand_placeholder:"مثال: Sézane",
      f_price_label:"السعر (درهم)", f_price_placeholder:"مثال: 250",
      f_category_label:"الفئة", f_condition_label:"الحالة",
      f_size_label:"المقاس", f_size_placeholder:"مثال: M، 38، 41...",
      f_desc_label:"الوصف", f_desc_placeholder:"صف الخامة والقصة وأي عيوب…",
      publish_btn:"نشر المنتج",
      published_toast:"تم نشر منتجك!",
      all_conditions:"كل الحالات",
      fav_added:"أُضيف إلى المفضلة", fav_removed:"أُزيل من المفضلة",
      fav_empty:"ليس لديك أي عناصر مفضلة بعد",
      fav_section_title:"مفضلتك",
      empty_title:"لم يتم العثور على أي منتج",
      empty_sub:"جرّب فئة أخرى أو كلمة بحث مختلفة.",
      size_label:"المقاس",
      fav_tooltip:"أضف إلى المفضلة",
      cod_note:"الدفع عند الاستلام — عربون يؤكد طلبك، والباقي يُدفع لمندوب التوصيل",
      seller_meta:"★ {rating} · {city}",
      offer_btn:"تقديم عرض", buy_btn_prefix:"اطلب ·", message_seller_btn:"رسالة",
      offer_prompt:"اقترح مبلغاً بالدرهم",
      offer_message:(amount)=>`مرحباً، أقترح عليك ${amount} درهم مقابل هذا المنتج. هل هذا ممكن؟`,
      offer_sent:"تم إرسال عرضك كرسالة إلى البائع",
      checkout_article:"المنتج", checkout_fee:"رسوم الخدمة", checkout_total:"المجموع",
      checkout_deposit_label:"العربون المطلوب دفعه الآن", checkout_due_label:"المتبقي لمندوب التوصيل",
      checkout_note:(seller)=>`يؤكد العربون طلبك لدى ${seller} وهو غير قابل للاسترداد في حال رفض استلام الطرد. يُخصم من السعر النهائي.`,
      checkout_address_label:"عنوان التوصيل", checkout_address_placeholder:"العنوان، الحي، المدينة",
      checkout_city_label:"المدينة", checkout_city_placeholder:"مثال: الدار البيضاء",
      checkout_back:"رجوع", checkout_confirm_prefix:"دفع العربون",
      checkout_address_missing:"أضف عنوان التوصيل",
      checkout_success:"تم تأكيد الطلب! ستجده في «مشترياتي».",
      currency:"درهم",
      categories:{all:"الكل",women:"نساء",men:"رجال",kids:"أطفال",shoes:"أحذية",accessories:"إكسسوارات",home:"المنزل"},
      conditions:{new_tag:"جديد بالبطاقة",very_good:"حالة جيدة جداً",good:"حالة جيدة",fair:"حالة مقبولة"},
      cat_icons:{all:"✦",women:"👗",men:"👕",kids:"🧸",shoes:"👟",accessories:"👜",home:"🏺"},
      order_status:{pending_deposit:"في انتظار العربون",confirmed:"مؤكد",shipped:"تم الشحن",delivered:"تم التسليم",refused:"مرفوض",cancelled:"ملغى",sold:"مباع",active:"معروض",archived:"مؤرشف"},
      auth_login_tab:"تسجيل الدخول", auth_register_tab:"إنشاء حساب",
      auth_email_label:"البريد الإلكتروني", auth_password_label:"كلمة المرور", auth_name_label:"الاسم الكامل", auth_city_label:"المدينة",
      auth_login_btn:"تسجيل الدخول", auth_register_btn:"إنشاء حسابي", auth_logout_btn:"تسجيل الخروج",
      auth_required_toast:"سجّل الدخول للمتابعة",
      login_success:"تم تسجيل الدخول بنجاح", register_success:"تم إنشاء الحساب بنجاح", logout_success:"تم تسجيل الخروج",
      account_tab_listings:"إعلاناتي", account_tab_purchases:"مشترياتي", account_tab_sales:"مبيعاتي",
      no_listings_yet:"لم تنشر أي إعلان بعد.",
      no_purchases_yet:"لا توجد مشتريات بعد.",
      no_sales_yet:"لا توجد مبيعات بعد.",
      msg_select_conversation:"اختر محادثة",
      msg_type_placeholder:"اكتب رسالة…", msg_send_btn:"إرسال",
      msg_no_conversations:"لا توجد محادثات بعد.",
      generic_error:"حدث خطأ ما. حاول مرة أخرى.",
      network_error:"تعذّر الوصول إلى الخادم.",
    },
  };

  let currentLang = localStorage.getItem("balled_lang") || "fr";
  function t(key){ return translations[currentLang][key]; }
  function tCat(key){ return translations[currentLang].categories[key] || key; }
  function tCond(key){ return translations[currentLang].conditions[key] || key; }
  function tStatus(key){ return translations[currentLang].order_status[key] || key; }

  const categoryKeys = ["all","women","men","kids","shoes","accessories","home"];
  const conditionKeys = ["new_tag","very_good","good","fair"];

  // =========================================================
  // API CLIENT
  // =========================================================
  const API_BASE = window.location.origin;

  function authHeader(){
    const token = localStorage.getItem("balled_token");
    return token ? { Authorization: "Bearer " + token } : {};
  }

  async function api(path, { method = "GET", body, isForm = false } = {}) {
    const headers = { ...authHeader() };
    if (!isForm) headers["Content-Type"] = "application/json";
    let res;
    try {
      res = await fetch(API_BASE + path, {
        method,
        headers,
        body: body ? (isForm ? body : JSON.stringify(body)) : undefined,
      });
    } catch (err) {
      throw new Error(t("network_error"));
    }
    let data = {};
    try { data = await res.json(); } catch (e) { /* empty body */ }
    if (!res.ok) throw new Error(data.error || t("generic_error"));
    return data;
  }

  // =========================================================
  // AUTH STATE
  // =========================================================
  let currentUser = null;

  async function loadSession(){
    const token = localStorage.getItem("balled_token");
    if (!token) return;
    try {
      const { user } = await api("/api/auth/me");
      currentUser = user;
    } catch (err) {
      localStorage.removeItem("balled_token");
      currentUser = null;
    }
    updateAuthUI();
  }

  function updateAuthUI(){
    const loginBtn = document.getElementById("login-btn");
    const accountBtn = document.getElementById("account-btn");
    const accountAvatar = document.getElementById("account-avatar");
    if (currentUser) {
      loginBtn.style.display = "none";
      accountBtn.style.display = "flex";
      accountAvatar.textContent = initialsOf(currentUser.name);
    } else {
      loginBtn.style.display = "inline-flex";
      accountBtn.style.display = "none";
    }
  }

  function initialsOf(name){
    return (name || "").trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
  }

  function requireAuth(){
    if (currentUser) return true;
    showToast(t("auth_required_toast"));
    openAuth("login");
    return false;
  }

  // =========================================================
  // STATIC TEXT (data-i18n attributes)
  // =========================================================
  function applyStaticText(){
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(translations[currentLang][key] !== undefined) el.textContent = translations[currentLang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
      const key = el.getAttribute("data-i18n-placeholder");
      if(translations[currentLang][key] !== undefined) el.setAttribute("placeholder", translations[currentLang][key]);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el=>{
      const key = el.getAttribute("data-i18n-title");
      if(translations[currentLang][key] !== undefined) el.setAttribute("title", translations[currentLang][key]);
    });
    document.querySelectorAll("[data-i18n-cat]").forEach(el=>{
      el.textContent = tCat(el.getAttribute("data-i18n-cat"));
    });
    document.querySelectorAll("[data-i18n-cond]").forEach(el=>{
      el.textContent = tCond(el.getAttribute("data-i18n-cond"));
    });
    document.getElementById("hero-title").innerHTML = t("hero_title_html");
    document.getElementById("section-title").textContent =
      currentView === "favorites" ? t("fav_section_title") : t("section_title_default");
  }

  function setLanguage(lang){
    currentLang = lang;
    localStorage.setItem("balled_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll(".lang-btn").forEach(b=>{
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    applyStaticText();
    renderCategories();
    renderFilters();
    if(currentView === "favorites"){ loadFavoritesView(); } else { resetAndLoadGrid(); }
  }

  // =========================================================
  // CATEGORY CHIPS
  // =========================================================
  const catScroll = document.getElementById("cat-scroll");
  let activeCategory = "all";
  let activeCondition = "all";

  function renderCategories(){
    catScroll.innerHTML = "";
    categoryKeys.forEach(key=>{
      const el = document.createElement("button");
      el.className = "chip" + (key === activeCategory ? " active" : "");
      el.dataset.cat = key;
      el.innerHTML = `<span class="ic">${translations[currentLang].cat_icons[key]}</span>${tCat(key)}`;
      el.addEventListener("click", ()=>{
        activeCategory = key;
        currentView = "default";
        document.getElementById("section-title").textContent = t("section_title_default");
        document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
        el.classList.add("active");
        resetAndLoadGrid();
      });
      catScroll.appendChild(el);
    });
  }

  const filterRow = document.getElementById("filter-row");
  function renderFilters(){
    filterRow.innerHTML = "";
    const allBtn = document.createElement("button");
    allBtn.className = "filter-pill" + (activeCondition === "all" ? " active" : "");
    allBtn.textContent = t("all_conditions");
    allBtn.dataset.cond = "all";
    allBtn.addEventListener("click", ()=> selectFilter("all", allBtn));
    filterRow.appendChild(allBtn);
    conditionKeys.forEach(key=>{
      const el = document.createElement("button");
      el.className = "filter-pill" + (key === activeCondition ? " active" : "");
      el.textContent = tCond(key);
      el.dataset.cond = key;
      el.addEventListener("click", ()=> selectFilter(key, el));
      filterRow.appendChild(el);
    });
  }
  function selectFilter(key, el){
    activeCondition = key;
    document.querySelectorAll(".filter-pill").forEach(x=>x.classList.remove("active"));
    el.classList.add("active");
    resetAndLoadGrid();
  }

  // =========================================================
  // PRODUCT GRID (backed by the real API, server-side pagination)
  // =========================================================
  const grid = document.getElementById("product-grid");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const searchInput = document.getElementById("search-input");

  let currentView = "default"; // "default" | "favorites"
  let page = 1;
  const PAGE_SIZE = 12;
  let totalCount = 0;
  let loadedListings = [];
  let isLoading = false;

  function cardHTML(p){
    const img = p.images && p.images[0] ? p.images[0] : "";
    return `
      <div class="card-media">
        ${img ? `<img src="${img}" alt="${escapeHtml(p.title)}" loading="lazy">` : `<div style="width:100%;height:100%;"></div>`}
        <button class="fav-btn ${p.isFavorited?'saved':''}" data-id="${p.id}" title="${t('fav_tooltip')}">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="${p.isFavorited?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <div class="cond-tag">${tCond(p.condition)}</div>
      </div>
      <div class="card-body">
        <div class="card-brand">${escapeHtml(p.brand || "")}</div>
        <div class="card-title">${escapeHtml(p.title)}</div>
        <div class="card-meta">${t('size_label')} ${escapeHtml(p.size || "")}</div>
        <div class="card-price-row">
          <div><span class="card-price">${p.price} ${t('currency')}</span>${p.oldPrice ? `<span class="card-old-price">${p.oldPrice} ${t('currency')}</span>`:""}</div>
        </div>
      </div>
    `;
  }

  function escapeHtml(str){
    const d = document.createElement("div");
    d.textContent = str == null ? "" : String(str);
    return d.innerHTML;
  }

  function renderEmptyState(message, sub){
    grid.style.display = "block";
    grid.innerHTML = `<div class="empty-state">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <div style="font-weight:600;color:var(--ink);margin-bottom:4px;">${message}</div>
      ${sub ? `<div style="font-size:13.5px;">${sub}</div>` : ""}
    </div>`;
  }

  function renderCards(items){
    grid.style.display = "grid";
    items.forEach(p=>{
      const card = document.createElement("div");
      card.className = "card";
      card.addEventListener("click", ()=>openItem(p.id));
      card.innerHTML = cardHTML(p);
      card.querySelector(".fav-btn").addEventListener("click",(e)=>{
        e.stopPropagation();
        toggleFav(p.id, card.querySelector(".fav-btn"));
      });
      grid.appendChild(card);
    });
  }

  async function resetAndLoadGrid(){
    currentView = "default";
    page = 1;
    loadedListings = [];
    grid.innerHTML = "";
    await loadGridPage();
  }

  async function loadGridPage(){
    if (isLoading) return;
    isLoading = true;
    try {
      const params = new URLSearchParams();
      if (activeCategory !== "all") params.set("category", activeCategory);
      if (activeCondition !== "all") params.set("condition", activeCondition);
      const q = searchInput.value.trim();
      if (q) params.set("q", q);
      params.set("page", page);
      params.set("pageSize", PAGE_SIZE);

      const data = await api(`/api/listings?${params.toString()}`);
      totalCount = data.total;
      loadedListings = loadedListings.concat(data.listings);

      if (loadedListings.length === 0) {
        renderEmptyState(t("empty_title"), t("empty_sub"));
      } else {
        if (page === 1) grid.innerHTML = "";
        renderCards(data.listings);
      }
      loadMoreBtn.style.display = loadedListings.length < totalCount ? "inline-flex" : "none";
    } catch (err) {
      renderEmptyState(err.message);
      loadMoreBtn.style.display = "none";
    } finally {
      isLoading = false;
    }
  }

  loadMoreBtn.addEventListener("click", ()=>{
    page += 1;
    loadGridPage();
  });

  let searchDebounce;
  searchInput.addEventListener("input", ()=>{
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(resetAndLoadGrid, 350);
  });

  // =========================================================
  // FAVORITES
  // =========================================================
  const favCountEl = document.getElementById("fav-count");

  async function refreshFavCount(){
    if (!currentUser) { favCountEl.style.display = "none"; return; }
    try {
      const { listings } = await api("/api/favorites");
      favCountEl.textContent = listings.length;
      favCountEl.style.display = listings.length ? "flex" : "none";
    } catch (err) { /* ignore */ }
  }

  async function toggleFav(id, btnEl){
    if (!requireAuth()) return;
    const isSaved = btnEl.classList.contains("saved");
    try {
      if (isSaved) {
        await api(`/api/favorites/${id}`, { method: "DELETE" });
        showToast(t("fav_removed"));
      } else {
        await api(`/api/favorites/${id}`, { method: "POST" });
        showToast(t("fav_added"));
      }
      btnEl.classList.toggle("saved");
      btnEl.querySelector("svg").setAttribute("fill", isSaved ? "none" : "currentColor");
      refreshFavCount();
      if (currentView === "favorites" && isSaved) loadFavoritesView();
    } catch (err) {
      showToast(err.message);
    }
  }

  async function loadFavoritesView(){
    if (!requireAuth()) return;
    currentView = "favorites";
    activeCategory = "all"; activeCondition = "all";
    document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active", x.dataset.cat==="all"));
    document.querySelectorAll(".filter-pill").forEach(x=>x.classList.toggle("active", x.dataset.cond==="all"));
    searchInput.value = "";
    document.getElementById("section-title").textContent = t("fav_section_title");
    loadMoreBtn.style.display = "none";
    grid.innerHTML = "";
    try {
      const { listings } = await api("/api/favorites");
      if (listings.length === 0) renderEmptyState(t("fav_empty"));
      else renderCards(listings);
    } catch (err) {
      renderEmptyState(err.message);
    }
    window.scrollTo({top: document.querySelector(".cat-strip").offsetTop - 90, behavior:"smooth"});
  }

  document.getElementById("fav-icon-btn").addEventListener("click", loadFavoritesView);

  // =========================================================
  // ITEM MODAL
  // =========================================================
  const itemOverlay = document.getElementById("item-overlay");
  const itemModalContent = document.getElementById("item-modal-content");

  async function openItem(id){
    let listing;
    try {
      const data = await api(`/api/listings/${id}`);
      listing = data.listing;
    } catch (err) {
      showToast(err.message);
      return;
    }
    const initials = initialsOf(listing.seller.name);
    const images = listing.images.length ? listing.images : [""];
    const isOwner = currentUser && currentUser.id === listing.seller.id;

    itemModalContent.innerHTML = `
      <button class="modal-close" id="item-close">✕</button>
      <div class="item-modal-grid">
        <div class="item-media">
          <img src="${images[0]}" alt="${escapeHtml(listing.title)}" id="item-main-img">
        </div>
        <div class="item-info">
          <div class="item-brand">${escapeHtml(listing.brand || "")}</div>
          <div class="item-title">${escapeHtml(listing.title)}</div>
          <div class="item-price">${listing.price} ${t('currency')}</div>
          <div class="cod-note">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4M2 11h20"/></svg>
            ${t('cod_note')}
          </div>
          <div class="item-tags">
            <span class="item-tag">${t('size_label')} ${escapeHtml(listing.size || "")}</span>
            <span class="item-tag">${tCond(listing.condition)}</span>
            <span class="item-tag">${tCat(listing.category)}</span>
          </div>
          <p class="item-desc">${escapeHtml(listing.description || "")}</p>
          <div class="seller-row">
            <div class="seller-avatar">${initials}</div>
            <div>
              <div class="seller-name">${escapeHtml(listing.seller.name)}</div>
              <div class="seller-meta">${t('seller_meta').replace("{rating}", (listing.seller.rating||4.8).toFixed(1)).replace("{city}", listing.seller.city || "")}</div>
            </div>
          </div>
          <div id="item-actions-zone"></div>
        </div>
      </div>
    `;
    if (images.length > 1) {
      const mediaEl = itemModalContent.querySelector(".item-media");
      const thumbs = document.createElement("div");
      thumbs.className = "item-thumbs";
      thumbs.style.cssText = "display:flex;gap:6px;padding:10px;flex-wrap:wrap;";
      images.forEach((src, idx) => {
        const th = document.createElement("img");
        th.src = src; th.style.cssText = "width:52px;height:52px;object-fit:cover;border-radius:6px;cursor:pointer;opacity:" + (idx===0?"1":".6");
        th.addEventListener("click", ()=>{
          document.getElementById("item-main-img").src = src;
          thumbs.querySelectorAll("img").forEach(i=>i.style.opacity=".6");
          th.style.opacity = "1";
        });
        thumbs.appendChild(th);
      });
      mediaEl.appendChild(thumbs);
    }

    if (isOwner) {
      document.getElementById("item-actions-zone").innerHTML = `<p style="font-size:13px;color:var(--ink-soft);">${t('account_tab_listings')}</p>`;
    } else {
      renderBuyStep(listing);
    }

    itemOverlay.classList.add("open");
    document.getElementById("item-close").addEventListener("click", closeItem);
  }

  function renderBuyStep(listing){
    const zone = document.getElementById("item-actions-zone");
    zone.innerHTML = `
      <div class="item-actions">
        <button class="btn btn-ghost" id="offer-btn">${t('offer_btn')}</button>
        <button class="btn btn-coral" id="buy-btn">${t('buy_btn_prefix')} ${listing.price} ${t('currency')}</button>
      </div>
    `;
    document.getElementById("offer-btn").addEventListener("click", async ()=>{
      if (!requireAuth()) return;
      const amount = prompt(t("offer_prompt"), Math.max(1, Math.round(listing.price*0.85)));
      if (!amount) return;
      try {
        await api("/api/messages", { method: "POST", body: {
          listingId: listing.id, receiverId: listing.seller.id, body: t("offer_message")(amount),
        }});
        closeItem();
        showToast(t("offer_sent"));
      } catch (err) { showToast(err.message); }
    });
    document.getElementById("buy-btn").addEventListener("click", ()=>{
      if (!requireAuth()) return;
      renderCheckoutStep(listing);
    });
  }

  function renderCheckoutStep(listing){
    const price = listing.price;
    const serviceFee = Math.max(15, Math.round(price*0.05*100)/100);
    const deposit = Math.max(30, Math.round(price*0.15*100)/100);
    const dueAtDelivery = Math.round((price + serviceFee - deposit)*100)/100;
    const total = Math.round((price+serviceFee)*100)/100;
    const cur = t("currency");
    const zone = document.getElementById("item-actions-zone");
    zone.innerHTML = `
      <div class="checkout-box">
        <div class="checkout-row"><span>${t('checkout_article')}</span><span>${price.toFixed(2)} ${cur}</span></div>
        <div class="checkout-row"><span>${t('checkout_fee')}</span><span>${serviceFee.toFixed(2)} ${cur}</span></div>
        <div class="checkout-row checkout-total"><span>${t('checkout_total')}</span><span>${total.toFixed(2)} ${cur}</span></div>
        <div class="checkout-split">
          <div class="checkout-split-item">
            <span class="checkout-split-label">${t('checkout_deposit_label')}</span>
            <span class="checkout-split-value">${deposit.toFixed(2)} ${cur}</span>
          </div>
          <div class="checkout-split-item">
            <span class="checkout-split-label">${t('checkout_due_label')}</span>
            <span class="checkout-split-value">${dueAtDelivery.toFixed(2)} ${cur}</span>
          </div>
        </div>
        <p class="checkout-note">${t('checkout_note')(listing.seller.name)}</p>
        <div class="form-row" style="margin-top:14px;">
          <label>${t('checkout_address_label')}</label>
          <input type="text" id="checkout-address" placeholder="${t('checkout_address_placeholder')}">
        </div>
        <div class="form-row">
          <label>${t('checkout_city_label')}</label>
          <input type="text" id="checkout-city" placeholder="${t('checkout_city_placeholder')}">
        </div>
        <div class="form-error" id="checkout-error"></div>
        <div class="item-actions">
          <button class="btn btn-ghost" id="checkout-back">${t('checkout_back')}</button>
          <button class="btn btn-coral" id="checkout-confirm">${t('checkout_confirm_prefix')} ${deposit.toFixed(2)} ${cur}</button>
        </div>
      </div>
    `;
    document.getElementById("checkout-back").addEventListener("click", ()=> renderBuyStep(listing));
    document.getElementById("checkout-confirm").addEventListener("click", async ()=>{
      const address = document.getElementById("checkout-address").value.trim();
      const city = document.getElementById("checkout-city").value.trim();
      const errEl = document.getElementById("checkout-error");
      if (!address) { errEl.textContent = t("checkout_address_missing"); return; }
      errEl.textContent = "";
      try {
        await api("/api/orders", { method: "POST", body: {
          listingId: listing.id, deliveryAddress: address, deliveryCity: city,
        }});
        closeItem();
        showToast(t("checkout_success"));
        resetAndLoadGrid();
      } catch (err) {
        errEl.textContent = err.message;
      }
    });
  }

  function closeItem(){ itemOverlay.classList.remove("open"); }
  itemOverlay.addEventListener("click", (e)=>{ if(e.target===itemOverlay) closeItem(); });

  // =========================================================
  // SELL MODAL
  // =========================================================
  const sellOverlay = document.getElementById("sell-overlay");
  function openSell(){
    if (!requireAuth()) return;
    sellOverlay.classList.add("open");
  }
  function closeSell(){ sellOverlay.classList.remove("open"); }
  ["sell-btn","hero-sell-btn","cta-sell-btn"].forEach(id=>{
    document.getElementById(id).addEventListener("click", openSell);
  });
  document.getElementById("sell-close").addEventListener("click", closeSell);
  sellOverlay.addEventListener("click", (e)=>{ if(e.target===sellOverlay) closeSell(); });
  document.getElementById("hero-browse-btn").addEventListener("click", ()=>{
    window.scrollTo({top: document.querySelector(".cat-strip").offsetTop - 90, behavior:"smooth"});
  });
  document.getElementById("logo-home").addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));

  const photoInput = document.getElementById("f-photos");
  const photoPreview = document.getElementById("photo-preview");
  photoInput.addEventListener("change", ()=>{
    photoPreview.innerHTML = "";
    Array.from(photoInput.files).slice(0, 6).forEach(file=>{
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      photoPreview.appendChild(img);
    });
  });

  document.getElementById("sell-form").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const errEl = document.getElementById("sell-error");
    const submitBtn = document.getElementById("sell-submit-btn");
    errEl.textContent = "";

    const formData = new FormData();
    formData.append("title", document.getElementById("f-title").value);
    formData.append("brand", document.getElementById("f-brand").value);
    formData.append("category", document.getElementById("f-category").value);
    formData.append("condition", document.getElementById("f-condition").value);
    formData.append("size", document.getElementById("f-size").value);
    formData.append("price", document.getElementById("f-price").value);
    formData.append("description", document.getElementById("f-desc").value);
    Array.from(photoInput.files).slice(0, 6).forEach(file => formData.append("images", file));

    submitBtn.disabled = true;
    try {
      await api("/api/listings", { method: "POST", body: formData, isForm: true });
      e.target.reset();
      photoPreview.innerHTML = "";
      closeSell();
      activeCategory = "all"; activeCondition = "all";
      document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active", x.dataset.cat==="all"));
      document.querySelectorAll(".filter-pill").forEach(x=>x.classList.toggle("active", x.dataset.cond==="all"));
      document.getElementById("section-title").textContent = t("section_title_default");
      showToast(t("published_toast"));
      resetAndLoadGrid();
      window.scrollTo({top: document.querySelector(".cat-strip").offsetTop - 90, behavior:"smooth"});
    } catch (err) {
      errEl.textContent = err.message;
    } finally {
      submitBtn.disabled = false;
    }
  });

  // =========================================================
  // AUTH MODAL
  // =========================================================
  const authOverlay = document.getElementById("auth-overlay");
  function openAuth(mode){
    authOverlay.classList.add("open");
    setAuthTab(mode || "login");
  }
  function closeAuth(){ authOverlay.classList.remove("open"); }
  document.getElementById("login-btn").addEventListener("click", ()=> openAuth("login"));
  document.getElementById("auth-close").addEventListener("click", closeAuth);
  authOverlay.addEventListener("click", (e)=>{ if(e.target===authOverlay) closeAuth(); });

  function setAuthTab(mode){
    document.getElementById("tab-login").classList.toggle("active", mode==="login");
    document.getElementById("tab-register").classList.toggle("active", mode==="register");
    document.getElementById("login-form").style.display = mode==="login" ? "block" : "none";
    document.getElementById("register-form").style.display = mode==="register" ? "block" : "none";
  }
  document.getElementById("tab-login").addEventListener("click", ()=> setAuthTab("login"));
  document.getElementById("tab-register").addEventListener("click", ()=> setAuthTab("register"));

  document.getElementById("login-form").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const errEl = document.getElementById("login-error");
    errEl.textContent = "";
    try {
      const { token, user } = await api("/api/auth/login", { method: "POST", body: {
        email: document.getElementById("login-email").value,
        password: document.getElementById("login-password").value,
      }});
      localStorage.setItem("balled_token", token);
      currentUser = user;
      updateAuthUI();
      closeAuth();
      showToast(t("login_success"));
      refreshFavCount();
      refreshMsgCount();
      resetAndLoadGrid();
    } catch (err) {
      errEl.textContent = err.message;
    }
  });

  document.getElementById("register-form").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const errEl = document.getElementById("register-error");
    errEl.textContent = "";
    try {
      const { token, user } = await api("/api/auth/register", { method: "POST", body: {
        name: document.getElementById("register-name").value,
        email: document.getElementById("register-email").value,
        city: document.getElementById("register-city").value,
        password: document.getElementById("register-password").value,
      }});
      localStorage.setItem("balled_token", token);
      currentUser = user;
      updateAuthUI();
      closeAuth();
      showToast(t("register_success"));
      refreshFavCount();
    } catch (err) {
      errEl.textContent = err.message;
    }
  });

  // =========================================================
  // ACCOUNT MODAL
  // =========================================================
  const accountOverlay = document.getElementById("account-overlay");
  document.getElementById("account-btn").addEventListener("click", openAccount);
  document.getElementById("account-close").addEventListener("click", ()=> accountOverlay.classList.remove("open"));
  accountOverlay.addEventListener("click", (e)=>{ if(e.target===accountOverlay) accountOverlay.classList.remove("open"); });

  function openAccount(){
    if (!currentUser) return;
    document.getElementById("account-modal-avatar").textContent = initialsOf(currentUser.name);
    document.getElementById("account-modal-name").textContent = currentUser.name;
    document.getElementById("account-modal-email").textContent = currentUser.email;
    accountOverlay.classList.add("open");
    setAccountTab("listings");
  }

  document.querySelectorAll(".account-tab").forEach(btn=>{
    btn.addEventListener("click", ()=> setAccountTab(btn.dataset.tab));
  });

  async function setAccountTab(tab){
    document.querySelectorAll(".account-tab").forEach(b=>b.classList.toggle("active", b.dataset.tab===tab));
    const content = document.getElementById("account-tab-content");
    content.innerHTML = `<div style="text-align:center;color:var(--ink-soft);font-size:13px;padding:20px;">…</div>`;
    try {
      if (tab === "listings") {
        const { listings } = await api("/api/listings/mine/all");
        content.innerHTML = listings.length ? listings.map(listingRow).join("") : emptyRow(t("no_listings_yet"));
      } else if (tab === "purchases") {
        const { orders } = await api("/api/orders/mine?role=buyer");
        content.innerHTML = orders.length ? orders.map(orderRow).join("") : emptyRow(t("no_purchases_yet"));
      } else {
        const { orders } = await api("/api/orders/mine?role=seller");
        content.innerHTML = orders.length ? orders.map(orderRow).join("") : emptyRow(t("no_sales_yet"));
      }
    } catch (err) {
      content.innerHTML = emptyRow(err.message);
    }
  }

  function emptyRow(msg){
    return `<div style="text-align:center;color:var(--ink-soft);font-size:13.5px;padding:24px 10px;">${msg}</div>`;
  }
  function listingRow(l){
    const img = l.images[0] || "";
    return `<div class="mini-row">
      ${img ? `<img src="${img}">` : `<div style="width:48px;height:48px;border-radius:8px;background:var(--teal-100);"></div>`}
      <div class="mini-row-info">
        <div class="mini-row-title">${escapeHtml(l.title)}</div>
        <div class="mini-row-meta">${l.price} ${t('currency')}</div>
      </div>
      <span class="status-pill status-${l.status}">${tStatus(l.status)}</span>
    </div>`;
  }
  function orderRow(o){
    const img = o.listing.image || "";
    return `<div class="mini-row">
      ${img ? `<img src="${img}">` : `<div style="width:48px;height:48px;border-radius:8px;background:var(--teal-100);"></div>`}
      <div class="mini-row-info">
        <div class="mini-row-title">${escapeHtml(o.listing.title)}</div>
        <div class="mini-row-meta">${o.price} ${t('currency')} · ${t('checkout_deposit_label')}: ${o.deposit} ${t('currency')}</div>
      </div>
      <span class="status-pill status-${o.status}">${tStatus(o.status)}</span>
    </div>`;
  }

  document.getElementById("logout-btn").addEventListener("click", ()=>{
    localStorage.removeItem("balled_token");
    currentUser = null;
    updateAuthUI();
    accountOverlay.classList.remove("open");
    favCountEl.style.display = "none";
    document.getElementById("msg-count").style.display = "none";
    showToast(t("logout_success"));
    if (currentView === "favorites") resetAndLoadGrid();
  });

  // =========================================================
  // MESSAGES MODAL
  // =========================================================
  const messagesOverlay = document.getElementById("messages-overlay");
  const msgCountEl = document.getElementById("msg-count");
  let activeConversation = null; // { listingId, otherUserId, otherUserName }

  document.getElementById("msg-icon-btn").addEventListener("click", ()=>{
    if (!requireAuth()) return;
    messagesOverlay.classList.add("open");
    loadConversations();
  });
  document.getElementById("messages-close").addEventListener("click", ()=> messagesOverlay.classList.remove("open"));
  messagesOverlay.addEventListener("click", (e)=>{ if(e.target===messagesOverlay) messagesOverlay.classList.remove("open"); });

  async function refreshMsgCount(){
    if (!currentUser) { msgCountEl.style.display = "none"; return; }
    try {
      const { conversations } = await api("/api/messages/conversations");
      const unread = conversations.reduce((sum, c) => sum + (c.unreadCount || 0), 0);
      msgCountEl.textContent = unread;
      msgCountEl.style.display = unread ? "flex" : "none";
    } catch (err) { /* ignore */ }
  }

  async function loadConversations(){
    const listEl = document.getElementById("conv-list-items");
    listEl.innerHTML = `<div style="padding:20px;color:var(--ink-soft);font-size:13px;">…</div>`;
    try {
      const { conversations } = await api("/api/messages/conversations");
      if (conversations.length === 0) {
        listEl.innerHTML = `<div style="padding:20px;color:var(--ink-soft);font-size:13px;">${t('msg_no_conversations')}</div>`;
        return;
      }
      listEl.innerHTML = "";
      conversations.forEach(c=>{
        const item = document.createElement("div");
        item.className = "conv-item";
        item.innerHTML = `
          <span class="avatar-chip">${initialsOf(c.otherUserName)}</span>
          <div>
            <div class="conv-item-name">${escapeHtml(c.otherUserName)}</div>
            <div class="conv-item-preview">${escapeHtml(c.lastMessageBody || "")}</div>
          </div>
        `;
        item.addEventListener("click", ()=> openConversation(c.listingId, c.otherUserId, c.otherUserName, c.listingTitle));
        listEl.appendChild(item);
      });
    } catch (err) {
      listEl.innerHTML = `<div style="padding:20px;color:var(--ink-soft);font-size:13px;">${err.message}</div>`;
    }
  }

  async function openConversation(listingId, otherUserId, otherUserName, listingTitle){
    activeConversation = { listingId, otherUserId, otherUserName };
    document.getElementById("conv-empty").style.display = "none";
    document.getElementById("conv-thread-active").style.display = "flex";
    document.getElementById("conv-thread-head").textContent = `${otherUserName} — ${listingTitle || ""}`;
    document.querySelectorAll(".conv-item").forEach(el=>el.classList.remove("active"));

    const messagesEl = document.getElementById("conv-messages");
    messagesEl.innerHTML = "";
    try {
      const { messages } = await api(`/api/messages/${listingId}/${otherUserId}`);
      messages.forEach(m=>{
        const bubble = document.createElement("div");
        bubble.className = "msg-bubble " + (m.senderId === currentUser.id ? "mine" : "theirs");
        bubble.textContent = m.body;
        messagesEl.appendChild(bubble);
      });
      messagesEl.scrollTop = messagesEl.scrollHeight;
      refreshMsgCount();
    } catch (err) {
      showToast(err.message);
    }
  }

  document.getElementById("conv-composer").addEventListener("submit", async (e)=>{
    e.preventDefault();
    if (!activeConversation) return;
    const input = document.getElementById("conv-input");
    const body = input.value.trim();
    if (!body) return;
    try {
      await api("/api/messages", { method: "POST", body: {
        listingId: activeConversation.listingId, receiverId: activeConversation.otherUserId, body,
      }});
      input.value = "";
      openConversation(activeConversation.listingId, activeConversation.otherUserId, activeConversation.otherUserName);
    } catch (err) {
      showToast(err.message);
    }
  });

  // =========================================================
  // LANGUAGE SWITCHER
  // =========================================================
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.addEventListener("click", ()=> setLanguage(btn.dataset.lang));
  });

  // =========================================================
  // TOAST
  // =========================================================
  let toastTimer;
  function showToast(msg){
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>el.classList.remove("show"), 2800);
  }

  // =========================================================
  // INIT
  // =========================================================
  async function init(){
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll(".lang-btn").forEach(b=>{
      b.classList.toggle("active", b.dataset.lang === currentLang);
    });
    applyStaticText();
    renderCategories();
    renderFilters();
    await loadSession();
    await loadGridPage();
    refreshFavCount();
    refreshMsgCount();
  }
  init();
})();
