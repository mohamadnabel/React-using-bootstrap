import React from "react";
import "../components/pro.css";
import Myitem from "./item";

function Myprodouct() {
  const prodact = [
    {
      itemName: "MBC",
      yearsOld: 20,
      position: "CEO",
      photo:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D2462206413865123410&tbnid=4tpeXXT-SyaCXM&vet=12ahUKEwjdorOPz9L_AhX7rycCHVRiBQwQMygBegUIARCoAQ..i&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fp%2FCIrg7DqngWF%2F&docid=FmiSd9v-LyZxxM&w=1440&h=1800&q=random%20photo&ved=2ahUKEwjdorOPz9L_AhX7rycCHVRiBQwQMygBegUIARCoAQ",
    },
    {
      itemName: "Drama",
      yearsOld: 15,
      position: "EEO",
      photo:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D2462206413865123410&tbnid=4tpeXXT-SyaCXM&vet=12ahUKEwjdorOPz9L_AhX7rycCHVRiBQwQMygBegUIARCoAQ..i&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fp%2FCIrg7DqngWF%2F&docid=FmiSd9v-LyZxxM&w=1440&h=1800&q=random%20photo&ved=2ahUKEwjdorOPz9L_AhX7rycCHVRiBQwQMygBegUIARCoAQ",
    },
    {
      itemName: "MBC",
      yearsOld: 80,
      position: "CMO",
      photo:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fbloggingwithreese.files.wordpress.com%2F2020%2F11%2Frandom-photo-dump.jpg%3Fw%3D640&tbnid=b5vtCQuNAmWKeM&vet=12ahUKEwjdorOPz9L_AhX7rycCHVRiBQwQMygFegUIARCyAQ..i&imgrefurl=https%3A%2F%2Fbloggingwithreese.wordpress.com%2F2020%2F11%2F17%2Frandom-photo-dump%2F&docid=NrtkkQ5XjELRPM&w=640&h=360&q=random%20photo&ved=2ahUKEwjdorOPz9L_AhX7rycCHVRiBQwQMygFegUIARCyAQ",
    },
  ];
  const mapProdact = prodact.map((element) => (
    <div>
      <p id="element_name">{element.itemName}</p>
      <p id="element_yearsOld">{element.yearsOld}</p>
      <p id="element_position">{element.position}</p>
      <img src={element.photo} />
    </div>
  ));

  return (
    <div className="main-proudact">
      <p>
        {mapProdact.map((element, index) => (
          <div
            titt={prodact.itemName}
            className={"proudact num :" + index}
            key={index}
          >
            <p>{element}</p>
          </div>
        ))}
      </p>
      <Myitem title={(prodact[0].itemName, prodact[0].photo)} />
      <Myitem title={prodact[0].photo} />
      <Myitem title={prodact[0].position} />
    </div>
  );
}

export default Myprodouct;
