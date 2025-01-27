

import Image from "next/image";



export default function HeroSecond() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ margin: '0 1% 5px 1%' }}>
        <Image src={'search.svg'} width={'526'} height={'296'} />
      </div>
      <div style={{ margin: '0 1% 5px 1%' }}>
        <Image src={'rangedisplay.svg'} width={'526'} height={'296'} />
      </div>
    </div>

    <div>
      
    </div>
  );
}