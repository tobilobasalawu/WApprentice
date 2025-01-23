import Image from "next/image";

export default function HeroSecond() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Image src={'search.svg'} width={'526'} height={'296'} style={{ margin: '10px' }}/>
      <Image src={'rangedisplay.svg'} width={'526'} height={'296'} style={{ margin: '10px' }}/>
    </div>
    
  );
}