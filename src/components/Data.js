import {HiViewGrid} from 'react-icons/hi'
import {IoPeopleSharp,IoHelpCircleSharp}  from 'react-icons/io5'
import {ImPriceTags, ImBooks} from 'react-icons/im'
import {RiShoppingBag2Fill, RiTeamFill} from 'react-icons/ri'
import {MdIntegrationInstructions} from 'react-icons/md'
import {BsFillKeyFill} from 'react-icons/bs'
import {FcDataConfiguration} from 'react-icons/fc'


const Data={
    items:[
        {
            product_name:'AWS',
            product_features:'Server Size, Computation Speed, +2',
            billable_metric_name:'Cloud Storage',
            sku_count:'108',

        },
        {
            product_name:'IOT',
            product_features:'Type Of Device, Pin Frequency, +1',
            billable_metric_name:'Pin Frequency',
            sku_count:'24',
            
        },
        {
            product_name:'Credit Card',
            product_features:'Type Of Credit Card, Credit Limit',
            billable_metric_name:'Transaction Based',
            sku_count:'8',
            
        }
    ]
}
export default Data;

export const Dashboard=[
    {
        icon: HiViewGrid,
        name:'Overview',
    },
    {
        icon:IoPeopleSharp,
        name:'Customers',
    },
    {
        icon:ImPriceTags,
        name:'Pricing',
    },
    {
        icon:RiShoppingBag2Fill,
        name:'Plans',
    },
    {
        icon:ImBooks,
        name:'Products',
    },
];
 
export const Developers=[
    {
        icon:MdIntegrationInstructions,
        name:'Integration Pipeline',
    },
    {
        icon:BsFillKeyFill,
        name:'Api Token',
    },
    {
        icon:IoHelpCircleSharp,
        name:'Webhooks',
    },
]
 
export const settings=[
    {
        icon:RiTeamFill,
        name:'Team',
    },
    {
        icon:FcDataConfiguration,
        name:'Billing Configuration',
    },
]