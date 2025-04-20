import { Elekt } from '@/components/pages/Elekt'
import { Shell } from '@/components/pages/Shell'
import { Accuport } from '@/components/pages/Accuport'
import { Meta } from '@/components/pages/Meta'
import { Deliveroo } from '@/components/pages/Deliveroo'
import { Soldo } from '@/components/pages/Soldo'

export function generateStaticParams() {
    return [
      { name: 'elekt-app' },
      { name: 'accuport' },
      { name: 'meta' },
      { name: 'shell-energy-assistant' },
      { name: 'soldo' },
      { name: 'deliveroo' },
    ]
  }

export default async function Page({params,}: {params: Promise<{ name: string }>}) {
    const { name } = await params

    switch (name) {
        case 'elekt-app':
           return <Elekt/>
            break;
        case 'shell-energy-assistant':
            return <Shell/>
            break;
        case 'accuport':
            return <Accuport/>
            break;
        case 'meta':
            return <Meta/>
            break;
        case 'deliveroo':
            return <Deliveroo/>
            break;
        case 'soldo':
            return <Soldo/>
            break;    
        default:
            break;
    }
  }