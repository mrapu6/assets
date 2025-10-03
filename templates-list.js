const templates = [
{id:"ta",category:"Tech",preview:"/th/ta.webp",ratio:"16:9"}, 
{id:"tb",category:"DIY",preview:"/th/tb.webp",ratio:"16:9"}, 
{id:"tc",category:"Education",preview:"/th/tc.webp",ratio:"16:9"}, 
{id:"td",category:"Music",preview:"/th/td.webp",ratio:"16:9"}, 
{id:"te",category:"Education",preview:"/th/te.webp",ratio:"16:9"}, 
{id:"tf",category:"Gaming",preview:"/th/tf.webp",ratio:"16:9"}, 
{id:"tg",category:"Vlog",preview:"/th/tg.webp",ratio:"16:9"}, 
{id:"th",category:"Podcast",preview:"/th/th.webp",ratio:"16:9"}, 
{id:"ti",category:"Tutorial",preview:"/th/ti.webp",ratio:"16:9"}, 
{id:"tj",category:"Fitness",preview:"/th/tj.webp", ratio:"16:9"}, 
{id:"tk",category:"Gaming",preview:"/th/tk.webp",ratio:"16:9"}, 
{id:"tl",category:"Vlog",preview:"/th/tl.webp",ratio:"16:9"}, 
{id:"tm",category:"Mystery",preview:"/th/tm.webp",ratio:"16:9"}, 
{id:"tn",category:"Tech",preview:"/th/tn.webp",ratio:"16:9"}, 
{id:"to",category:"Finance",preview:"/th/to.webp",ratio:"16:9"}, 
{id:"tp",category:"Gaming",preview:"/th/tp.webp",ratio:"16:9"},
{id:"tq",category:"Gaming",preview:"/th/tq.webp",ratio:"16:9"}, 
{id:"tr",category:"Finance",preview:"/th/tr.webp",ratio:"16:9",pro:true}, 
{id:"ts",category:"Music",preview:"/th/ts.webp",ratio:"16:9"}, 
{id:"tt",category:"Comedy",preview:"/th/tt.webp",ratio:"16:9"}, 
{id:"tu",category:"Tech",preview:"/th/tu.webp",ratio:"16:9"}, 
{id:"tv",category:"Music",preview:"/th/tv.webp",ratio:"16:9"}, 
{id:"tw",category:"Tech",preview:"/th/tw.webp",ratio:"16:9"}, 
{id:"tx",category:"Gaming",preview:"/th/tx.webp",ratio:"16:9"}, 
{id:"ty",category:"Music",preview:"/th/ty.webp",ratio:"16:9"}, 
{id:"tz",category:"Comedy",preview:"/th/tz.webp",ratio:"16:9"},
{id:"taa",category:"Gaming",preview:"/th/taa.webp",ratio:"16:9"}, 
{id:"tab",category:"News",preview:"/th/tab.webp",ratio:"16:9"}, 
{id:"tac",category:"Entertainment",preview:"/th/tac.webp",ratio:"16:9"}, 
{id:"tad",category:"Podcast",preview:"/th/tad.webp",ratio:"16:9"}, 
{id:"tae",category:["Sports","Gaming"],preview:"/th/tae.webp",ratio:"16:9"}, 
{id:"taf",category:"Gaming",preview:"/th/taf.webp",ratio:"16:9"},
{id:"tag",category:"DIY",preview:"/th/tag.webp",ratio:"16:9"}, 
{id:"tah",category:"Education",preview:"/th/tah.webp",ratio:"16:9",pro:true}, 
{id:"tai",category:"Finance",preview:"/th/tai.webp",ratio:"16:9"}, 
{id:"taj",category:"Vlog",preview:"/th/taj.webp",ratio:"16:9"}, 
{id:"tak",category:"Lifestyle",preview:"/th/tak.webp",ratio:"16:9"}, 
{id:"tal",category:"Vlog",preview:"/th/tal.webp",ratio:"16:9"}, 
{id:"tam",category:"Music",preview:"/th/tam.webp",ratio:"16:9"},

{id:"tan",category:["Cooking","Food"],preview:"/th/tan.webp",ratio:"16:9"}, 
{id:"tao",category:["Documentary","Art","Mystery"],preview:"/th/tao.webp",ratio:"16:9"}, 
{id:"tap",category:["Tech","Business","Tutorial"],preview:"/th/tap.webp",ratio:"16:9"}, 
{id:"taq",category:["Music","Art"],preview:"/th/taq.webp",ratio:"16:9"}, 
{id:"tar",category:["Cooking","DIY", "Food"],preview:"/th/tar.webp",ratio:"16:9"},
{id:"tas",category:["Tech","education"],preview:"/th/tas.webp",ratio:"16:9"}, 

{id:"tat",category:["Fashion","Vlog","Beauty"],preview:"/th/tat.webp",ratio:"9:16"}, 
{id:"tau",category:["Cooking","Vlog"],preview:"/th/tau.webp",ratio:"4:5"},
{id:"tav",category:["Music","Gaming"],preview:"/th/tav.webp",ratio:"16:9"},
{id:"taw",category:["Business","Podcast"],preview:"/th/taw.webp",ratio:"1:1"},
{id:"tax",category:["Design","Fashion","Business"],preview:"/th/tax.webp",ratio:"1:1"},

 ];
        
const premadeTextStyles = [
             { id: "a", preview: "/i/a.webp", pro:true },
             { id: "b", preview: "/i/b.webp" },
             { id: "c", preview: "/i/c.webp" },
             { id: "d", preview: "/i/d.webp" }, 
             
             { id: "e", preview: "/i/e.webp" },
             { id: "f", preview: "/i/f.webp" },
             { id: "g", preview: "/i/g.webp" },
             { id: "h", preview: "/i/h.webp" },
             { id: "i", preview: "/i/i.webp" },
             
             { id: "j", preview: "/i/j.webp" },
             { id: "k", preview: "/i/k.webp" },
             
             { id: "l", preview: "/i/l.webp" },
             { id: "m", preview: "/i/m.webp" },
    
             { id: "n", preview: "/i/n.webp" },
             { id: "o", preview: "/i/o.webp" },
         
             { id: "p", preview: "/i/p.webp" },
             { id: "q", preview: "/i/q.webp" },

             { id: "r", preview: "/i/r.webp" },
             { id: "s", preview: "/i/s.webp" },
        
             { id: "t", preview: "/i/t.webp" },
             {id:"u",preview:"/i/u.webp"},

             { id: "v", preview: "/i/v.webp" },
             { id: "w", preview: "/i/w.webp" },
    
             { id: "x", preview: "/i/x.webp" },
            {id: "y",preview: "/i/y.webp"},
            {id: "z",preview: "/i/z.webp"}, 
    

{id:"aa",preview:"/i/aa.webp"},
{id:"ab",preview:"/i/ab.webp"},
{id:"ac",preview:"/i/ac.webp"},
{id:"ad",preview:"/i/ad.webp"},
{id:"ae",preview:"/i/ae.webp"},

{id:"af",preview:"/i/af.webp"},
{id:"ag",preview:"/i/ag.webp"},
 
{id:"ah",preview:"/t/girl-after.webp"},


{id:"ai",preview:"/i/ai.webp"},
{id:"aj",preview:"/i/aj.webp"},


{id:"ak",preview:"/i/ak.webp"},
{id:"al",preview:"/i/al.webp"},


{id:"am",preview:"/i/am.webp"},
{id:"an",preview:"/i/an.webp"},


{id:"ao",preview:"/i/ao.webp"},
{id:"ap",preview:"/i/ap.webp"},
{id:"aq",preview:"/i/aq.webp"},
{id:"ar",preview:"/i/ar.webp"},
{id:"as",preview:"/i/as.webp"},
{id:"at",preview:"/i/at.webp"},
{id:"au",preview:"/i/au.webp"},

{id:"av",preview:"/i/av.webp"},
{id:"aw",preview:"/i/aw.webp"},
{id:"ax",preview:"/i/ax.webp"},

{id:"ay",preview:"/i/ay.webp"},
{id:"az",preview:"/i/az.webp"},


{id:"ba",preview:"/i/ba.webp"},
{id:"ba1",preview:"/i/ba1.webp"},
{id:"bb",preview:"/i/bb.webp"},
{id:"bc",preview:"/i/bc.webp"},
{id:"bd",preview:"/i/bd.webp"},
{id:"be",preview:"/i/be.webp"},
{id:"bf",preview:"/i/bf.webp"},
{id:"bg",preview:"/i/bg.webp"},
{id:"bh",preview:"/i/bh.webp"},


 
{id:"bi",preview:"/i/bi.webp"},
{id:"bj",preview:"/i/bj.webp"},
{id:"bk",preview:"/i/bk.webp"},
{id:"bl",preview:"/i/bl.webp"},

{id:"bm",preview:"/i/bm.webp"},
{id:"bn",preview:"/i/bn.webp"},
{id:"bo",preview:"/i/bo.webp"},
{id:"bp",preview:"/i/bp.webp"},
{id:"bq",preview:"/i/bq.webp"},
{id:"bp1",preview:"/i/bq1.webp"},
{id:"br",preview:"/i/br.webp"},
       
       
        ];
        
const CLIP_SHAPES = [
            { name: 'circle', path: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' },
            { name: 'triangle', path: 'M1,21H23L12,2' },
            { name: 'diamond', path: 'M12,2L2,12L12,22L22,12L12,2Z' },
            { name: 'pentagon', path: 'M12,2.5L2,9.8L5.8,21.2H18.2L22,9.8L12,2.5Z' },
            { name: 'hexagon', path: 'M17.2,3H6.8L2,9.6V16.4L6.8,23H17.2L22,16.4V9.6L17.2,3Z' },
            { name: 'star', path: 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z' },
            { name: 'heart', path: 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z' },
          ];
const SIZE_PRESETS = [ { name: 'YouTube Thumbnail', w: 1280, h: 720 }, { name: 'YouTube Cover', w: 2560, h: 1440 }, { name: 'YouTube Profile', w: 1080, h: 1080 }, { name: 'YouTube End Screen', w: 1920, h: 1080 }, { name: 'Facebook Post', w: 1200, h: 630 }, { name: 'Facebook Profile', w: 1080, h: 1080 }, { name: 'Facebook Story', w: 1080, h: 1920 }, { name: 'Facebook Cover', w: 820, h: 312 }, { name: 'Facebook Event Cover', w: 1920, h: 1080 }, { name: 'Instagram Square', w: 1080, h: 1080 }, { name: 'Instagram Story', w: 1080, h: 1920 }, { name: 'Instagram Post', w: 1080, h: 1350 }, { name: 'LinkedIn Post', w: 1200, h: 628 }, { name: 'LinkedIn Personal Banner', w: 1584, h: 396 }, { name: 'LinkedIn Company Banner', w: 1128, h: 191 }, { name: 'X Post', w: 1200, h: 675 }, { name: 'X Header', w: 1500, h: 500 }, { name: 'X Profile', w: 1080, h: 1080 }, { name: 'Pinterest Pin', w: 1000, h: 1500 }, { name: 'Pinterest Long Pin', w: 1000, h: 2100 }, { name: 'Pinterest Profile', w: 1080, h: 1080 }, { name: 'Twitch Cover', w: 1920, h: 480 }, { name: 'Logo', w: 800, h: 800 }, { name: 'Presentation', w: 1920, h: 1080 }, { name: 'Business Card', w: 1050, h: 600 }, { name: 'Email Header', w: 600, h: 200 }, { name: '1:1 (Square)', w: 2048, h: 2048 }, { name: '3:4 (Portrait)', w: 1536, h: 2048 }, { name: '3:2 (Mid)', w: 2048, h: 1365 }, { name: '2:1 (Wide)', w: 2048, h: 1024 }, { name: '16:9 (Landscape)', w: 2048, h: 1152 } ];
         