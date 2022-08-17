const tampons = [
  [
    {
      id: null,
      name: "o.b. Original Multipack Tampons - Applicator-Free - Unscented - Regular/Super/Super Plus - 40ct",
      brand: "o.b.",
      retailer: "Target",
      price: 6.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_fbc9335f-fe54-49fe-b551-0784875c554d",
      buyURL:
        "https://www.target.com/p/o-b-original-multipack-tampons-applicator-free-unscented-regular-super-super-plus-40ct/-/A-14013693",
      available: true,
    },
    {
      id: null,
      name: "Playtex Sport Tampons - Plastic - Unscented - Regular - 36ct",
      brand: "Playtex",
      retailer: "Target",
      price: 7.49,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_5590ed0e-2647-42bb-856a-6d5dce5ddf6f",
      buyURL:
        "https://www.target.com/p/playtex-sport-tampons-plastic-unscented-regular-36ct/-/A-13397719",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl Tampons Regular/Super Absorbency with LeakGuard Braid -Duo Pack - Unscented - 34ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_733a402e-4683-429d-a322-bf638f70a0c3",
      buyURL:
        "https://www.target.com/p/tampax-pearl-tampons-regular-super-absorbency-with-leakguard-braid-duo-pack-unscented-34ct/-/A-46793820",
      available: true,
    },
    {
      id: null,
      name: "L . Organic Cotton Full Size Multipack Refill Tampons - Regular/Super - 42ct",
      brand: "L .",
      retailer: "Target",
      price: 10.69,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_baffae11-0c5c-4a74-9751-b4ad0d6c1ba4",
      buyURL:
        "https://www.target.com/p/l-organic-cotton-full-size-multipack-refill-tampons-regular-super-42ct/-/A-84743601",
      available: true,
    },
    {
      id: null,
      name: "Tampax Radiant Light and Regular Duo-Pack Tampons - 26ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_460cbc87-f6c6-403a-a03d-859fd6c0c57a",
      buyURL:
        "https://www.target.com/p/tampax-radiant-light-and-regular-duo-pack-tampons-26ct/-/A-81782496",
      available: true,
    },
    {
      id: null,
      name: "Tampax Radiant Tampons Regular Absorbency - Unscented - 28ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_7eda07b9-85ee-4a32-96a0-8c6836e46bc4",
      buyURL:
        "https://www.target.com/p/tampax-radiant-tampons-regular-absorbency-unscented-28ct/-/A-76155403",
      available: true,
    },
    {
      id: null,
      name: "Tampax Radiant Duopack Regular/Super Absorbency Unscented Plastic Tampons - 28ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_7a67cad4-4adb-431e-adb8-941b920d991b",
      buyURL:
        "https://www.target.com/p/tampax-radiant-duopack-regular-super-absorbency-unscented-plastic-tampons-28ct/-/A-76155398",
      available: true,
    },
    {
      id: null,
      name: "L . Organic Cotton Full Size Tampons - Regular - 30ct",
      brand: "L .",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_3693a1c9-7689-4094-a439-58301d96fc18",
      buyURL:
        "https://www.target.com/p/l-organic-cotton-full-size-tampons-regular-30ct/-/A-84743583",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl Tampons Light Absorbency with LeakGuard Braid -  Unscented - 36ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_44d2a58d-2794-4c4a-a4ef-d574990d3b12",
      buyURL:
        "https://www.target.com/p/tampax-pearl-tampons-light-absorbency-with-leakguard-braid-unscented-36ct/-/A-13368851",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl Tampons Super Absorbency with LeakGuard Braid - Unscented - 36ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_d74c56fc-4042-4f19-98bf-22cc4578c214",
      buyURL:
        "https://www.target.com/p/tampax-pearl-tampons-super-absorbency-with-leakguard-braid-unscented-36ct/-/A-13369121",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl Tampons Trio Pack with Plastic Applicator and LeakGuard Braid - Light/Regular/Super Absorbency - Unscented - 47ct",
      brand: "Tampax",
      retailer: "Target",
      price: 10.49,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_cb249433-0faf-4ffe-bc49-51e45c2f9b29",
      buyURL:
        "https://www.target.com/p/tampax-pearl-tampons-trio-pack-with-plastic-applicator-and-leakguard-braid-light-regular-super-absorbency-unscented-47ct/-/A-13190964",
      available: true,
    },
    {
      id: null,
      name: "Playtex Sport Multipack Tampons - Plastic - Unscented - Regular/Super - 48ct",
      brand: "Playtex",
      retailer: "Target",
      price: 9.79,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_16a5f16c-cac5-45b7-a117-e76786ed5ec0",
      buyURL:
        "https://www.target.com/p/playtex-sport-multipack-tampons-plastic-unscented-regular-super-48ct/-/A-14670716",
      available: true,
    },
    {
      id: null,
      name: "U by Kotex Click Compact Unscented Tampons - Regular - 45ct",
      brand: "U by Kotex",
      retailer: "Target",
      price: 9.49,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_c0eea172-70df-436c-bd39-7b041457464f",
      buyURL:
        "https://www.target.com/p/u-by-kotex-click-compact-unscented-tampons-regular-45ct/-/A-47919599",
      available: true,
    },
    {
      id: null,
      name: "Tampons - Regular Absorbency - Plastic - 36ct - up &#38; up&#8482;",
      brand: "up & up",
      retailer: "Target",
      price: 4.29,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_c8f5fe6a-7e04-43a3-9cc7-962ce9e53762",
      buyURL:
        "https://www.target.com/p/tampons-regular-absorbency-plastic-36ct-up-38-up-8482/-/A-50616712",
      available: true,
    },
    {
      id: null,
      name: "Multipack Tampons - Plastic - 50ct - up &#38; up&#8482;",
      brand: "up & up",
      retailer: "Target",
      price: 5.89,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_484217a4-2e0d-4afb-8fdb-938cde04501f",
      buyURL:
        "https://www.target.com/p/multipack-tampons-plastic-50ct-up-38-up-8482/-/A-15104004",
      available: true,
    },
    {
      id: null,
      name: "Cora Organic Cotton Tampons Mix Pack - Regular/Super Absorbency - 32ct",
      brand: "Cora",
      retailer: "Target",
      price: 11.49,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_9fb09ec2-3a14-4bb5-a257-ad0bde93dab9",
      buyURL:
        "https://www.target.com/p/cora-organic-cotton-tampons-mix-pack-regular-super-absorbency-32ct/-/A-53062312",
      available: true,
    },
    {
      id: null,
      name: "U by Kotex Click Compact Tampons -  Multipack -  Regular/Super -  Unscented - 45ct",
      brand: "U by Kotex",
      retailer: "Target",
      price: 9.49,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_a44659f5-200d-4d95-ac0c-f4dc9e115cfa",
      buyURL:
        "https://www.target.com/p/u-by-kotex-click-compact-tampons-multipack-regular-super-unscented-45ct/-/A-50567052",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl Tampons with LeakGuard Braid - Super Plus Absorbency - Unscented - 36ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_56364f36-f562-4c85-a696-9a9798342d8f",
      buyURL:
        "https://www.target.com/p/tampax-pearl-tampons-with-leakguard-braid-super-plus-absorbency-unscented-36ct/-/A-13368609",
      available: true,
    },
    {
      id: null,
      name: "Playtex Sport Ultra Tampons - 36ct",
      brand: "Playtex Sport",
      retailer: "Target",
      price: 7.69,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_06e23819-e8b6-4c3a-95b2-90110ec7dbbe",
      buyURL:
        "https://www.target.com/p/playtex-sport-ultra-tampons-36ct/-/A-84777475",
      available: true,
    },
    {
      id: null,
      name: "U by Kotex Click Compact Tampons -  Super -  Unscented - 32ct",
      brand: "U by Kotex",
      retailer: "Target",
      price: 7.19,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_afbab25b-f25d-4e54-990f-6094c9c59e89",
      buyURL:
        "https://www.target.com/p/u-by-kotex-click-compact-tampons-super-unscented-32ct/-/A-12213583",
      available: true,
    },
    {
      id: null,
      name: "L . Organic Cotton Full Size Tampons - Super - 30ct",
      brand: "L .",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_fb42db3f-a4c7-4c9b-8416-b4f1c0574d19",
      buyURL:
        "https://www.target.com/p/l-organic-cotton-full-size-tampons-super-30ct/-/A-84743588",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl Tampons - Ultra Absorbency with LeakGuard Braid - Unscented - 36ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_1eb8e31a-4093-4db2-b1fb-17c2634627aa",
      buyURL:
        "https://www.target.com/p/tampax-pearl-tampons-ultra-absorbency-with-leakguard-braid-unscented-36ct/-/A-13369058",
      available: true,
    },
    {
      id: null,
      name: "L . Organic Cotton Full Size Multipack Tampons - Regular/Super - 30ct",
      brand: "L .",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_1facb8fa-96c2-45ba-919f-b98946687e7f",
      buyURL:
        "https://www.target.com/p/l-organic-cotton-full-size-multipack-tampons-regular-super-30ct/-/A-84743590",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl TriplePack Tampons - Regular/Super/Super Plus/ - Unscented - 34ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_51469815-7136-419a-9ff8-e36b69131ef8",
      buyURL:
        "https://www.target.com/p/tampax-pearl-triplepack-tampons-regular-super-super-plus-unscented-34ct/-/A-13368852",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl with LeakGuard Braid Duo Pack Unscented Tampons - Light/Regular Absorbency - 34ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_4871f032-bd02-426e-ab7e-9e5e9f4ca8d8",
      buyURL:
        "https://www.target.com/p/tampax-pearl-with-leakguard-braid-duo-pack-unscented-tampons-light-regular-absorbency-34ct/-/A-79186014",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl Tampons Regular Absorbency with LeakGuard Braid - Unscented - 36ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_e1cf0814-3611-471d-8147-37efe566b591",
      buyURL:
        "https://www.target.com/p/tampax-pearl-tampons-regular-absorbency-with-leakguard-braid-unscented-36ct/-/A-13369122",
      available: true,
    },
    {
      id: null,
      name: "Tampax Pearl Triple Pack with Super/Super Plus/Ultra Absorbency Unscented Plastic Tampons - 34ct",
      brand: "Tampax",
      retailer: "Target",
      price: 7.99,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_42a39cfd-2c77-4a8b-8f61-01c5cb20baca",
      buyURL:
        "https://www.target.com/p/tampax-pearl-triple-pack-with-super-super-plus-ultra-absorbency-unscented-plastic-tampons-34ct/-/A-75663439",
      available: true,
    },
    {
      id: null,
      name: "Rounded-Tip Plastic Applicator Unscented Super Plus Tampons - 36ct - up &#38; up&#8482;",
      brand: "up & up",
      retailer: "Target",
      price: 6.49,
      quantity: null,
      imageURL:
        "https://target.scene7.com/is/image/Target/GUEST_f80c8e0a-66df-4ce9-a80e-9439b933da80",
      buyURL:
        "https://www.target.com/p/rounded-tip-plastic-applicator-unscented-super-plus-tampons-36ct-up-38-up-8482/-/A-75665714",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons, with leakguard braid, regular absorbency, unscented, 18 count",
      brand: "Tampax",
      retailer: "Walmart",
      price: 4.67,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/d927f5fe-b765-4f9a-84b0-f74f3b676180.f38860f2d97c855edcec414325574868.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-with-LeakGuard-Braid-Regular-Absorbency-Unscented-18-Count/20468140",
      available: true,
    },
    {
      id: null,
      name: "playtex sport regular 48 ct",
      brand: "Playtex",
      retailer: "Walmart",
      price: 9.68,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/82f9f792-a1b5-40b3-8a8e-a2e6226bc6a3.39850c69b90856fb22085630ef9f1a40.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL: "/ip/Playtex-Sport-Regular-48-CT/673680437",
      available: true,
    },
    {
      id: null,
      name: "u by kotex click compact multipack tampons, regular/super, unscented, 30 count",
      brand: "Kotex",
      retailer: "Walmart",
      price: 7.12,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/797fd0ba-5949-4f9a-b293-33e2d725f8b5.a0ee9e42a506f4d5847276d1b1cee602.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/U-by-Kotex-Click-Compact-Multipack-Tampons-Regular-Super-Unscented-30-Count/610023504",
      available: true,
    },
    {
      id: null,
      name: "u by kotex click compact multipack tampons, regular/super, unscented, 45 count",
      brand: "Kotex",
      retailer: "Walmart",
      price: 9.36,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/08bd9cd5-e4e4-4103-878c-721ba2d22263.3b94f16130d424b258dfbd06e5ca9172.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/U-by-Kotex-Click-Compact-Multipack-Tampons-Regular-Super-Unscented-45-Count/629153468",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl super absorbency plastic tampons, unscented, 18 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 4.67,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/a6b63806-4740-4248-a7ce-ab401b814f4c.245f301e400fd1f8deb19fa2fc61e3fe.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Super-Absorbency-Plastic-Tampons-Unscented-18-Ct/10450957",
      available: true,
    },
    {
      id: null,
      name: "tampax radiant tampons, unscented, regular/ super absorbency, 28 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/8f3610e7-569c-4b53-bfb3-0c693e8b294a.a31d6f4c8d16461787dcfa4e2c73e8d8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Radiant-Tampons-Unscented-Regular-Super-Absorbency-28-Ct/504871567",
      available: true,
    },
    {
      id: null,
      name: "cora organic cotton tampons regular/super multipack 96 ct",
      brand: "Cora",
      retailer: "Walmart",
      price: 24.75,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/55eaa877-3e35-4d1c-a255-16e9c39a59a1.fffa0a7ad9ccce3cdaaae26479108832.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Cora-Organic-Cotton-Tampons-Regular-Super-Multipack-96-ct/396335741",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons multi-pack, light/regular/super absorbency, 47 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 10.47,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/919cf5f2-2991-4846-8d26-8bf83ab2690a.eece8d4d202d79f9ea842ea610982f3c.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Multi-Pack-Light-Regular-Super-Absorbency-47-Ct/854115382",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons, unscented, super, super plus and ultra, 34 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/12f5e8e8-4209-4235-953b-c6e13784f357.897b405fc18f53769804bac65dc543da.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Unscented-Super-Super-Plus-and-Ultra-34-Ct/390837645",
      available: true,
    },
    {
      id: null,
      name: "u by kotex click compact tampons, super, unscented, 32 count",
      brand: "Kotex",
      retailer: "Walmart",
      price: 7.12,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/3eeb1f68-c039-4a62-8b9e-5110cba22d5e.8771a8a5efdfdb10547ff3f88a3c8a1d.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
      buyURL:
        "/ip/U-by-Kotex-Click-Compact-Tampons-Super-Unscented-32-Count/452715856",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons, super plus absorbency, unscented, 18 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 4.67,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/4acbc060-af2a-498e-97be-dab230390472.adaabd545975be38788b603d12b8b4ae.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Super-Plus-Absorbency-Unscented-18-Ct/10450958",
      available: true,
    },
    {
      id: null,
      name: "lola super tampons, compact plastic applicator, 20 ct",
      brand: "LOLA",
      retailer: "Walmart",
      price: 6.98,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/4a0ff8aa-0899-41a7-8904-8548e78b4d15.7f6d74555c2babbf14ad32557fdf187e.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
      buyURL:
        "/ip/LOLA-Super-Tampons-Compact-Plastic-Applicator-20-Ct/951728303",
      available: true,
    },
    {
      id: null,
      name: "u by kotex click compact tampons, regular, unscented, 45 count",
      brand: "Kotex",
      retailer: "Walmart",
      price: 9.36,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/a5a7f3e1-d2e4-4ac1-8ba3-b426aa6cbcde.c9045a659518e1a5849ed78f723d8501.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/U-by-Kotex-Click-Compact-Tampons-Regular-Unscented-45-Count/973420847",
      available: true,
    },
    {
      id: null,
      name: "playtex sport multi-pack regular and super plastic applicator unscented tampons, 48 ct total, 360 degree sport level period protection, traps leaks, no-slip grip applicator, moves with you",
      brand: "Playtex",
      retailer: "Walmart",
      price: 9.68,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/02eeb3f3-a528-4bd8-bf08-2aed717c6e68.78d804057ab8d0202aa90aebedeb1a82.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Playtex-Sport-Multi-Pack-Regular-And-Super-Plastic-Applicator-Unscented-Tampons-48-Ct-Total-360-Degree-Level-Period-Protection-Traps-Leaks-No-Slip-Gr/162594077",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons, light absorbency, unscented, 18 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 4.67,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/3972880f-2cff-4b8c-8bcf-edd64c5ecca7.0a5795c2f67404a10cffb9c6411c9697.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Light-Absorbency-Unscented-18-Ct/953983676",
      available: true,
    },
    {
      id: null,
      name: "tampax radiant tampons duo pack regular/super absorbency, unscented, 38 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 10.47,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/f6998562-4abf-4c06-ae2f-251f0de69f3b.a9a17b428cd4db4bc369e215ecdde5ee.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Radiant-Tampons-Duo-Pack-Regular-Super-Absorbency-Unscented-38-Ct/543758810",
      available: true,
    },
    {
      id: null,
      name: "l. organic cotton tampons regular/super absorbency duo pack, 30 ct",
      brand: "L.",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/70c1c507-7ba5-47ef-858b-ba3d07499b45.bea44471f5a2f8ded750c0cae8b4fbb9.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/L-Organic-Cotton-Tampons-Regular-Super-Absorbency-Duo-Pack-30-Ct/542075537",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl super plus plastic tampons, unscented, 50 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 10.47,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/d3b0d105-39b0-45fc-b6f1-e46c404f327c.951beb01f224b1cdc934c867ba3fe72c.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Super-Plus-Plastic-Tampons-Unscented-50-Ct/55464532",
      available: true,
    },
    {
      id: null,
      name: "equate regular absorbency unscented tampons with plastic applicators, 20 ct",
      brand: "Equate",
      retailer: "Walmart",
      price: 3.17,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/c4480e06-f978-4190-a5fb-94a7d02556ad.0c66d02f14b9fa33863aa86ab2c3ad49.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Equate-Regular-Absorbency-Unscented-Tampons-with-Plastic-Applicators-20-Ct/17325304",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons, ultra absorbency, unscented, 32 count",
      brand: "Tampax",
      retailer: "Walmart",
      price: 22.87,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/8a377642-034c-411d-a4d3-e3de7d021251.8c99c3a5117221bdd9da31ad2167bd28.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Ultra-Absorbency-Unscented-32-Count/502420664",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons, with leakguard braid, ultra absorbency, unscented, 45 count",
      brand: "Tampax",
      retailer: "Walmart",
      price: 30.52,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/f4259fbb-e6b6-47f1-8083-27d77da3f96f.516d2b2661b4dcf024646e90609ade61.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-with-LeakGuard-Braid-Ultra-Absorbency-Unscented-45-Count/265318687",
      available: true,
    },
    {
      id: null,
      name: "equate unscented tampons with cardboard applicator - light, regular, super - 54 ct",
      brand: "Equate",
      retailer: "Walmart",
      price: 6.17,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/697c7377-6561-4173-8e90-4efeae3fd823.3ac79d221438533533ae82d80ff3bb06.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Equate-Unscented-Tampons-With-Cardboard-Applicator-Light-Regular-Super-54-Ct/10423601",
      available: false,
    },
    {
      id: null,
      name: "tampax pearl tampons multi-pack, light/regular/super absorbency, 34 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/e65d6c9f-a138-4b3f-9329-55c0a43d8ddf.b9b5647afdb0a18a2305c4dcfa070476.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Multi-Pack-Light-Regular-Super-Absorbency-34-Ct/148537714",
      available: true,
    },
    {
      id: null,
      name: "playtex sport regular plastic applicator unscented tampons, 36 ct, 360 degree sport level period protection, traps leaks, no-slip grip applicator, moves with you",
      brand: "Playtex",
      retailer: "Walmart",
      price: 7.48,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/1ac615a1-5327-4dfc-a09c-149deb50bc1d.52093975f021bd3627b67c10ebcf0fda.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Playtex-Sport-Regular-Plastic-Applicator-Unscented-Tampons-36-Ct-360-Degree-Level-Period-Protection-Traps-Leaks-No-Slip-Grip-Applicator-Moves-With-Yo/17018164",
      available: true,
    },
    {
      id: null,
      name: "playtex sport super plastic applicator tampons, 36 ct, 360 degree sport level period protection, no-slip grip applicator",
      brand: "Playtex",
      retailer: "Walmart",
      price: 7.48,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/42e7a6c2-1aad-4032-b9fb-a88bb96b0adb.32a74ba3260dd246cf5f8e729c6d29dc.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Playtex-Sport-Super-Plastic-Applicator-Tampons-36-Ct-360-Degree-Sport-Level-Period-Protection-No-Slip-Grip-Applicator/17325209",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons trio pack, with leakguard braid, regular/super/super plus absorbency, unscented, 34 count",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/b73b6669-e513-494b-bb32-81773610ed91.762cb104a964416ecb076d4b920800f2.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Trio-Pack-with-LeakGuard-Braid-Regular-Super-Super-Plus-Absorbency-Unscented-34-Count/119056996",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl regular absorbency plastic tampons, unscented, 50 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 10.47,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/001897f8-e173-49a7-b25c-1a635fada4e1.22e3431be606e0faef17be949b7c9bcc.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Regular-Absorbency-Plastic-Tampons-Unscented-50-Ct/183855729",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl super absorbency plastic tampons, unscented, 50 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 10.47,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/a6b63806-4740-4248-a7ce-ab401b814f4c.245f301e400fd1f8deb19fa2fc61e3fe.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Super-Absorbency-Plastic-Tampons-Unscented-50-Ct/10850092",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons, super plus absorbency, unscented, 36 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/d3b0d105-39b0-45fc-b6f1-e46c404f327c.951beb01f224b1cdc934c867ba3fe72c.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Super-Plus-Absorbency-Unscented-36-Ct/15580481",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons light absorbency, unscented, 36 count",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/3972880f-2cff-4b8c-8bcf-edd64c5ecca7.0a5795c2f67404a10cffb9c6411c9697.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Light-Absorbency-Unscented-36-Count/10849162",
      available: true,
    },
    {
      id: null,
      name: "u by kotex click compact tampons, super plus, unscented, 32 count",
      brand: "Kotex",
      retailer: "Walmart",
      price: 7.12,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/6654a90b-781a-4be5-8251-f3b0be6609d3.ebd6c2b58a3abdb65c02d613bf557bdb.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/U-by-Kotex-Click-Compact-Tampons-Super-Plus-Unscented-32-Count/484763567",
      available: true,
    },
    {
      id: null,
      name: "l. organic cotton tampons, regular absorbency, 30 count",
      brand: "L.",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/7296e22c-fd0c-482d-8e51-863786b4e495.ae5df4099229d776dff182c67aea0c25.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/L-Organic-Cotton-Tampons-Regular-Absorbency-30-Count/424258630",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl regular absorbency plastic tampons, unscented, 36 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/001897f8-e173-49a7-b25c-1a635fada4e1.22e3431be606e0faef17be949b7c9bcc.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Regular-Absorbency-Plastic-Tampons-Unscented-36-Ct/20468139",
      available: true,
    },
    {
      id: null,
      name: "tampax pure cotton tampons, duo pack regular/super absorbency, containing a 100% organic cotton core, 22 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/b04278a3-5101-4c99-994f-3d922e3fc0e3.02e1dedc507b48d5dd314079184bce93.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pure-Cotton-Tampons-Duo-Pack-Regular-Super-Absorbency-Containing-a-100-Organic-Cotton-Core-22-Ct/253023544",
      available: true,
    },
    {
      id: null,
      name: "equate super absorbency unscented tampons with plastic applicators, 36 ct",
      brand: "Equate",
      retailer: "Walmart",
      price: 5.77,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/d3c650d2-c7eb-45b8-9bd7-4075f0912431.6c817287b839ddea5c0cfb0965b1fdc6.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Equate-Super-Absorbency-Unscented-Tampons-with-Plastic-Applicators-36-Ct/10423619",
      available: true,
    },
    {
      id: null,
      name: "playtex sport plastic tampons, unscented, regular/super, 36 ct",
      brand: "Playtex",
      retailer: "Walmart",
      price: 7.48,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/ee5a74d1-c61a-405b-92b7-fb40e4d743e4_1.215e4a614d113304d98244ed2e6e6142.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Playtex-Sport-Plastic-Tampons-Unscented-Regular-Super-36-Ct/10293790",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons super absorbency, 36 count",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/6321f087-32fd-4a75-b2ce-90b56e61a0d0.8ac6383bc6917ea5d71125c7e1f0b5fe.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL: "/ip/Tampax-Pearl-Tampons-Super-Absorbency-36-Count/10313887",
      available: true,
    },
    {
      id: null,
      name: "tampax pearltampons, ultra absorbency, unscented, 18 count",
      brand: "Tampax",
      retailer: "Walmart",
      price: 4.67,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/8a377642-034c-411d-a4d3-e3de7d021251.8c99c3a5117221bdd9da31ad2167bd28.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-PearlTampons-Ultra-Absorbency-Unscented-18-Count/34899595",
      available: false,
    },
    {
      id: null,
      name: "equate regular absorbency unscented tampons with plastic applicators, 40 ct",
      brand: "Equate",
      retailer: "Walmart",
      price: 5.77,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/5bb1c2c3-5a09-4038-a311-67cc4ae555aa.c045b7c013a76e92048efbf5aa6c99fa.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Equate-Regular-Absorbency-Unscented-Tampons-with-Plastic-Applicators-40-Ct/10423611",
      available: true,
    },
    {
      id: null,
      name: "tampax pocket radiant duo pack, regular/super, unscented, 28 ct",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/a3c0f6cd-ba6b-4cc6-9b9a-dd25454aed0c.0728a7c91cc78077bb1d85bd515b303e.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pocket-Radiant-Duo-Pack-Regular-Super-Unscented-28-Ct/221524786",
      available: true,
    },
    {
      id: null,
      name: "tampax pearl tampons duo pack, with leakguard braid, regular/super absorbency, unscented, 34 count",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/cca4e4b4-9225-4a68-b87d-0a32f23786fb.d4200c444299983c08f56b2330775b6b.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pearl-Tampons-Duo-Pack-with-LeakGuard-Braid-Regular-Super-Absorbency-Unscented-34-Count/148927646",
      available: true,
    },
    {
      id: null,
      name: "tampax pure cotton tampons, contains 100% organic cotton core, super absorbency, 24 ct, unscented",
      brand: "Tampax",
      retailer: "Walmart",
      price: 7.97,
      quantity: null,
      imageURL:
        "https://i5.walmartimages.com/asr/df36161e-89da-4a42-8ec0-9a4898bcf95a.e2fefc0fb01cd2349c91eb78f9310eb0.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
      buyURL:
        "/ip/Tampax-Pure-Cotton-Tampons-Contains-100-Organic-Cotton-Core-Super-Absorbency-24-Ct-Unscented/748446549",
      available: true,
    },
  ],
];

export default tampons;
