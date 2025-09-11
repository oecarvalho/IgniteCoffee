import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { Beneficts } from "./styles";
import { BenefictsIcon } from "./BenefictsIcon";


export function ListBeneficts() {

    return (
        <Beneficts>
            <li>
                <BenefictsIcon bgColor='#C47F17'>
                    <ShoppingCartSimple size={16} weight="fill" />
                </BenefictsIcon>
                <p>Compra Simples e Segura</p>
            </li>

            <li>
                <BenefictsIcon bgColor='#574F4D'>
                    <Package size={16} weight="fill" />
                </BenefictsIcon>

                <p>Embalagem mantém o café intacto</p>
            </li>

            <li>
                <BenefictsIcon bgColor='#DBAC2C'>
                    <Timer size={16} weight="fill" />
                </BenefictsIcon>
                <p>Entrega rápida e rastreada</p>
            </li>

            <li>
                <BenefictsIcon bgColor='#8047F8'>
                    <Coffee size={16} weight="fill" />
                </BenefictsIcon>
                <p className="">O café chega fresquinho até você</p>
            </li>
        </Beneficts>
    )
}