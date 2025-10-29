<script>
	import Drawing from "../../component/Drawing.svelte";

</script>
<div>
  <div class="Title"></div>
  <h1>Drawing Board</h1>
</div>

<Drawing/>

<div>
  
  <button>Publish Drawing</button> 
</div>

<div>

    <button>Exit Drawing Board</button>
</div>

<div>
    <button>Save your work</button>
</div>


________________________________________________________________________________________________________________

<div class="container program-1">
  <div class="box-pencil">
    <img height=50 width=50 src="https://www.freeiconspng.com/thumbs/pencil-png/black-pencil-png-black-pencil-vector-8.png"/>
  </div>
  
  <div class="box-eraser">
    <img height=50 width=50 src="https://png.pngtree.com/png-vector/20240730/ourmid/pngtree-stationery-essential-eraser-on-transparent-background-png-image_13303676.png"/>
  </div>
</div>

<div class="popup">
  Which color would you like to select?
  <div class="box-green">
    <img height=50 width=50 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FO8tYJytd_XYQe2l7qfbS2E4rWc3L4TR41cxJPNb0ST_MuR-6IIBbt2YqdaQYbIiBWc&usqp=CAU"/>
  </div>
  <div class="box-red">
    <img height=50 width=50 src="https://www.mulberrypaperandmore.com/images/product/medium/8036.jpg"/>
  </div>
  <div class="box-blue">
    <img height=50 width=50 src="https://img.freepik.com/free-photo/water-drops-background_23-2148098971.jpg?semt=ais_hybrid&w=740&q=80"/>
  </div>
  <div class="box-yellow">
    <img height=50 width=50 src="https://aboffs.com/cdn/shop/products/2022-30-brightyellow_2000x.png?v=1587085556"/>
  </div>
  <div class="box-black">
    <img height=50 width=50 src="https://www.goldleaf.com.au/image/cache/catalog/catalog/!220-500x500.jpg"/>
  </div>
  <div class="box-orange">
    <img height=50 width=50 src="https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/238/464/fluorescent_orange__65442.1492527693.png?c=2"/>
  </div>
  <div class="box-dark-blue">
    <img height=50 width=50 src="https://cdn11.bigcommerce.com/s-3uewkq06zr/images/stencil/1280x1280/products/234/413/fluorescent_blue__34881.1492487711.png?c=2"/>
  </div>
  <div class="box-brown">
    <img height=50 width=50 src="https://www.thefortunateone.com/wp-content/uploads/2021/07/Brown-4E2F22.png"/>
  </div>
  <div class="box-pink">
    <img height=50 width=50 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNztv6V3BKGFPefBxMvggLNEs3GomP7RXQ0w&s"/>
  </div>
   <div class="box-purple">
    <img height=50 width=50 src="https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8545.jpg"/>
  </div>
  <div class="box-beige">
    <img height=50 width=50 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDxdT0rb7cM9SDbCPnYS70hX7mKdpq6eU5g&s"/>
  </div>
    <div class="box-white">
    <img height=50 width=50 src="https://static.vecteezy.com/system/resources/thumbnails/049/483/787/small/abstract-white-background-photo.jpg"/>
  </div>
   <div class="box-gray">
    <img height=50 width=50 src="https://images.steelcase.com/image/upload/v1567243086/6130_1000.jpg"/>
  </div>
   <div class="box-light-gray">
    <img height=50 width=50 src="https://res.cloudinary.com/hni-corporation/image/upload/d_HON:Brand:Icons:HON_Icon_Outlines_HON-Icon-Gallery-001.png/f_auto,q_auto/d_HON:Brand:Icons:HON_Icon_Outlines_HON-Icon-Gallery-001.png/f_auto,q_auto/v1693919362/Surface%20Materials/Finishes/Paint/hni-paint-cove.jpg"/>
  </div>
  
  
  
</div>

<div>
  <img height=50 width=50 src=""/>
</div>

<style>
    .Title{
  display: flex;
  justify-content: center;
}

.box-pencil{
  margin: 5px;
  border: 1px solid yellowgreen;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:center;
}


.box-marker{
  margin: 5px;
  border: 1px solid green;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:center;
}
.box-pen{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:center;
}
.box-color-pencil{
  margin: 5px;
  border: 1px solid blue;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:center;
}
.box-eraser{
  margin: 5px;
  border: 1px solid pink;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:center;
}
.box-paint{
  margin: 5px;
  border: 1px solid red;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:center;
}
.box-oil-pastel{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:center;
}

.box-green{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-light-gray{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-red{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-blue{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-yellow{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-black{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-orange{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-gray{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-brown{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-purple{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-dark-blue{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-pink{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-beige{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
.box-white{
  margin: 5px;
  border: 1px solid black;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  
}
___
_____
.program-1{
  display: flex;
  justify-content: center;
  flex-direction: column;
}


.popup{
  display: flex;
  flex-wrap: wrap-reverse;
  border: 1px solid black;
  height: 150px;
  width: 700px;
  justify-content:flex-end;
}

</style>
