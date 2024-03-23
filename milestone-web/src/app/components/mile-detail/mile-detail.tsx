import IMile from "@/app/create-mile/mile";
import './mile-detail.css'


interface MileDetailProps {
    mile: IMile;
}

const MileDetail: React.FC<MileDetailProps> = ({ mile }) => {

    return <>
        <div className="details">
            <div className="details-container">
                <div className="mile-detail">
                    <span className="label">{mile.name}</span>
                    <span style={{fontSize: 10}}>{mile.contractAddress}</span>
                    <div className="token">
                        <img src="/img/OP.png" /> {mile.token}
                    </div>
                    <span className="label-2">Montante atual</span>
                    <span>{mile.actualValue ? mile.actualValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}</span>
                    <span className="label-2">Sua meta</span>
                    <span>{mile.finalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                <img src="/img/graph.png" width="50%" />
            </div>
        </div>
    </>
}

export default MileDetail