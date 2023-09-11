import { FC } from 'react'
type P = {
    selectedLanguage:string,
    languages : {name:string}[];
    setSelectedLanguage:(s:string)=>void
}
const LangaugeMapper: FC<P> = ({ languages , setSelectedLanguage , selectedLanguage }) => {
    return <div className=' flex gap-4 flex-wrap'>
        {
            languages?.map((lang) => {
                return <div key={lang.name} onClick={() => setSelectedLanguage(lang.name)} className={'hover:scale-90 font-bold cursor-pointer  px-4 py-1 bg-yellow-200 rounded-xl shadow-xl '+(selectedLanguage== lang.name && " bg-gray-400 text-white scale-75 ")}>
                    {lang.name}
                </div>
            })
        }

    </div>
}
export default LangaugeMapper;