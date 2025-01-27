import Image from "next/image";

export default function HeroSecond() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ margin: '10px', marginLeft: '5%', marginRight: '5%' }}>
        <Image src={'search.svg'} width={'526'} height={'296'} />
      </div>
      <div style={{ margin: '10px', marginLeft: '5%', marginRight: '5%' }}>
        <Image src={'rangedisplay.svg'} width={'526'} height={'296'} />
      </div>
    </div>
  );
}