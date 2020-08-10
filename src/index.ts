// These will be overridden during CI/CD
const typescriptVersion: string = "{0}";
const gitShortHash: string = "{1}";
const buildDate: string = "{2}";

enum LengthCheckResult
{
    Ok,
    NotEnough,
    TooMuch
}

enum Country
{
    Albania,
    Algeria,
    Andorra,
    Angola,
    Austria,
    Azerbaijan,
    Bahrain,
    Belarus,
    Belgium,
    Benin,
    BosniaAndHerzegovina,
    Brazil,
    BritishVirginIslands,
    Bulgaria,
    BurkinaFaso,
    Burundi,
    Cameroon,
    CapeVerde,
    CentralAfricanRepublic,
    Congo,
    CostaRica,
    Croatia,
    Cyprus,
    CzechRepublic,
    Denmark,
    DominicanRepublic,
    Egypt,
    Estonia,
    FaroeIslands,
    Finland,
    France,
    FrenchGuiana,
    FrenchPolynesia,
    Gabon,
    Georgia,
    Germany,
    Gibraltar,
    Greece,
    Greenland,
    Guadeloupe,
    Guatemala,
    Guernsey,
    Hungary,
    Iceland,
    Iran,
    Iraq,
    Ireland,
    IsleOfMan,
    Israel,
    Italy,
    IvoryCoast,
    Jersey,
    Jordan,
    Kazakhstan,
    Kosovo,
    Kuwait,
    Latvia,
    Lebanon,
    Liechtenstein,
    Lithuania,
    Luxembourg,
    NorthMacedonia,
    Madagascar,
    Mali,
    Malta,
    Martinique,
    Mauritania,
    Mauritius,
    Moldova,
    Monaco,
    Montenegro,
    Mozambique,
    Netherlands,
    NewCaledonia,
    Norway,
    Pakistan,
    Palestine,
    Poland,
    Portugal,
    Qatar,
    Réunion,
    Romania,
    SaintLucia,
    SaintPierreAndMiquelon,
    SanMarino,
    SaoTomeAndPrincipe,
    SaudiArabia,
    Senegal,
    Serbia,
    Seychelles,
    Slovakia,
    Slovenia,
    Spain,
    Sweden,
    Switzerland,
    TimorLeste,
    Tunisia,
    Turkey,
    Ukraine,
    UnitedArabEmirates,
    UnitedKingdom,
    VaticanCityState,
    WallisAndFutuna,

    Unknown,
}

type codeToCountry = Record<string, Country>;
const codeToCountryMap: codeToCountry = { "FI": Country.Finland };

interface CountryDefinition {
    ibanLength: number;
    name: string;
}

type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

const countryToDefinitionMap: EnumDictionary<Country, CountryDefinition | undefined> = {
    [Country.Albania]: { ibanLength: 0, name: "Albania"},
    [Country.Algeria]: { ibanLength: 0, name: "Algeria"},
    [Country.Andorra]: { ibanLength: 0, name: "Andorra"},
    [Country.Angola]: { ibanLength: 0, name: "Angola"},
    [Country.Austria]: { ibanLength: 0, name: "Austria"},
    [Country.Azerbaijan]: { ibanLength: 0, name: "Azerbaijan"},
    [Country.Bahrain]: { ibanLength: 0, name: "Bahrain"},
    [Country.Belarus]: { ibanLength: 0, name: "Belarus"},
    [Country.Belgium]: { ibanLength: 0, name: "Belgium"},
    [Country.Benin]: { ibanLength: 0, name: "Benin"},
    [Country.BosniaAndHerzegovina]: { ibanLength: 0, name: "BosniaAndHerzegovina"},
    [Country.Brazil]: { ibanLength: 0, name: "Brazil"},
    [Country.BritishVirginIslands]: { ibanLength: 0, name: "BritishVirginIslands"},
    [Country.Bulgaria]: { ibanLength: 0, name: "Bulgaria"},
    [Country.BurkinaFaso]: { ibanLength: 0, name: "BurkinaFaso"},
    [Country.Burundi]: { ibanLength: 0, name: "Burundi"},
    [Country.Cameroon]: { ibanLength: 0, name: "Cameroon"},
    [Country.CapeVerde]: { ibanLength: 0, name: "CapeVerde"},
    [Country.CentralAfricanRepublic]: { ibanLength: 0, name: "CentralAfricanRepublic"},
    [Country.Congo]: { ibanLength: 0, name: "Congo"},
    [Country.CostaRica]: { ibanLength: 0, name: "CostaRica"},
    [Country.Croatia]: { ibanLength: 0, name: "Croatia"},
    [Country.Cyprus]: { ibanLength: 0, name: "Cyprus"},
    [Country.CzechRepublic]: { ibanLength: 0, name: "CzechRepublic"},
    [Country.Denmark]: { ibanLength: 0, name: "Denmark"},
    [Country.DominicanRepublic]: { ibanLength: 0, name: "DominicanRepublic"},
    [Country.Egypt]: { ibanLength: 0, name: "Egypt"},
    [Country.Estonia]: { ibanLength: 0, name: "Estonia"},
    [Country.FaroeIslands]: { ibanLength: 0, name: "FaroeIslands"},
    [Country.Finland]: { ibanLength: 18, name: "Finland"},
    [Country.France]: { ibanLength: 0, name: "France"},
    [Country.FrenchGuiana]: { ibanLength: 0, name: "FrenchGuiana"},
    [Country.FrenchPolynesia]: { ibanLength: 0, name: "FrenchPolynesia"},
    [Country.Gabon]: { ibanLength: 0, name: "Gabon"},
    [Country.Georgia]: { ibanLength: 0, name: "Georgia"},
    [Country.Germany]: { ibanLength: 0, name: "Germany"},
    [Country.Gibraltar]: { ibanLength: 0, name: "Gibraltar"},
    [Country.Greece]: { ibanLength: 0, name: "Greece"},
    [Country.Greenland]: { ibanLength: 0, name: "Greenland"},
    [Country.Guadeloupe]: { ibanLength: 0, name: "Guadeloupe"},
    [Country.Guatemala]: { ibanLength: 0, name: "Guatemala"},
    [Country.Guernsey]: { ibanLength: 0, name: "Guernsey"},
    [Country.Hungary]: { ibanLength: 0, name: "Hungary"},
    [Country.Iceland]: { ibanLength: 0, name: "Iceland"},
    [Country.Iran]: { ibanLength: 0, name: "Iran"},
    [Country.Iraq]: { ibanLength: 0, name: "Iraq"},
    [Country.Ireland]: { ibanLength: 0, name: "Ireland"},
    [Country.IsleOfMan]: { ibanLength: 0, name: "IsleOfMan"},
    [Country.Israel]: { ibanLength: 0, name: "Israel"},
    [Country.Italy]: { ibanLength: 0, name: "Italy"},
    [Country.IvoryCoast]: { ibanLength: 0, name: "IvoryCoast"},
    [Country.Jersey]: { ibanLength: 0, name: "Jersey"},
    [Country.Jordan]: { ibanLength: 0, name: "Jordan"},
    [Country.Kazakhstan]: { ibanLength: 0, name: "Kazakhstan"},
    [Country.Kosovo]: { ibanLength: 0, name: "Kosovo"},
    [Country.Kuwait]: { ibanLength: 0, name: "Kuwait"},
    [Country.Latvia]: { ibanLength: 0, name: "Latvia"},
    [Country.Lebanon]: { ibanLength: 0, name: "Lebanon"},
    [Country.Liechtenstein]: { ibanLength: 0, name: "Liechtenstein"},
    [Country.Lithuania]: { ibanLength: 0, name: "Lithuania"},
    [Country.Luxembourg]: { ibanLength: 0, name: "Luxembourg"},
    [Country.NorthMacedonia]: { ibanLength: 0, name: "NorthMacedonia"},
    [Country.Madagascar]: { ibanLength: 0, name: "Madagascar"},
    [Country.Mali]: { ibanLength: 0, name: "Mali"},
    [Country.Malta]: { ibanLength: 0, name: "Malta"},
    [Country.Martinique]: { ibanLength: 0, name: "Martinique"},
    [Country.Mauritania]: { ibanLength: 0, name: "Mauritania"},
    [Country.Mauritius]: { ibanLength: 0, name: "Mauritius"},
    [Country.Moldova]: { ibanLength: 0, name: "Moldova"},
    [Country.Monaco]: { ibanLength: 0, name: "Monaco"},
    [Country.Montenegro]: { ibanLength: 0, name: "Montenegro"},
    [Country.Mozambique]: { ibanLength: 0, name: "Mozambique"},
    [Country.Netherlands]: { ibanLength: 0, name: "Netherlands"},
    [Country.NewCaledonia]: { ibanLength: 0, name: "NewCaledonia"},
    [Country.Norway]: { ibanLength: 0, name: "Norway"},
    [Country.Pakistan]: { ibanLength: 0, name: "Pakistan"},
    [Country.Palestine]: { ibanLength: 0, name: "Palestine"},
    [Country.Poland]: { ibanLength: 0, name: "Poland"},
    [Country.Portugal]: { ibanLength: 0, name: "Portugal"},
    [Country.Qatar]: { ibanLength: 0, name: "Qatar"},
    [Country.Réunion]: { ibanLength: 0, name: "Réunion"},
    [Country.Romania]: { ibanLength: 0, name: "Romania"},
    [Country.SaintLucia]: { ibanLength: 0, name: "SaintLucia"},
    [Country.SaintPierreAndMiquelon]: { ibanLength: 0, name: "SaintPierreAndMiquelon"},
    [Country.SanMarino]: { ibanLength: 0, name: "SanMarino"},
    [Country.SaoTomeAndPrincipe]: { ibanLength: 0, name: "SaoTomeAndPrincipe"},
    [Country.SaudiArabia]: { ibanLength: 0, name: "SaudiArabia"},
    [Country.Senegal]: { ibanLength: 0, name: "Senegal"},
    [Country.Serbia]: { ibanLength: 0, name: "Serbia"},
    [Country.Seychelles]: { ibanLength: 0, name: "Seychelles"},
    [Country.Slovakia]: { ibanLength: 0, name: "Slovakia"},
    [Country.Slovenia]: { ibanLength: 0, name: "Slovenia"},
    [Country.Spain]: { ibanLength: 0, name: "Spain"},
    [Country.Sweden]: { ibanLength: 0, name: "Sweden"},
    [Country.Switzerland]: { ibanLength: 0, name: "Switzerland"},
    [Country.TimorLeste]: { ibanLength: 0, name: "TimorLeste"},
    [Country.Tunisia]: { ibanLength: 0, name: "Tunisia"},
    [Country.Turkey]: { ibanLength: 0, name: "Turkey"},
    [Country.Ukraine]: { ibanLength: 0, name: "Ukraine"},
    [Country.UnitedArabEmirates]: { ibanLength: 0, name: "UnitedArabEmirates"},
    [Country.UnitedKingdom]: { ibanLength: 0, name: "UnitedKingdom"},
    [Country.VaticanCityState]: { ibanLength: 0, name: "VaticanCityState"},
    [Country.WallisAndFutuna]: { ibanLength: 0, name: "WallisAndFutuna"},

    [Country.Unknown]: { ibanLength: 0, name: "Unknown"},
}


/** 
 * Init begins
 */
if ('serviceWorker' in navigator) {
    //navigator.serviceWorker.register('sw.js');
}

const ibanCode: HTMLElement = document.getElementById('ibanCode')!;
if (ibanCode) {
    const ibanCodeInput = <HTMLInputElement>ibanCode;
    ibanCodeInput.disabled = false;
    ibanCode.addEventListener('input', testIBAN);
}

const singleIBAN: HTMLElement = document.getElementById('singleIBAN')!;
const singleIsValid: HTMLElement = document.getElementById('singleIsValid')!;
const singleCountry: HTMLElement = document.getElementById('singleCountry')!;
const singleError: HTMLElement = document.getElementById('singleError')!;

const checkMarkEmoji: string = "✔️";
const crossMarkEmoji: string = "❌";

const errorAlphaNumericals: string = "Only alphanumerics are allowed!";
const errorCountry: string = "Cannot identify country code!";
const errorCodeTooShort: string = "IBAN is too short!";
const errorCodeTooLong: string = "IBAN is too long!";

/** 
 * Init ends
 */

export function testIBAN(event: Event): void {
    const inputString: string = (<HTMLInputElement>event.target).value;
    if (inputString) {
        writeSingleIBAN(inputString);

        // Only alphanumericals are allowed
        if (!inputString.match(/^[0-9A-Z]+$/)) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleCountry("");
            writeSingleError(errorAlphaNumericals);
            return;
        }

        const country: Country = figureOutCountry(inputString);
        if (country === Country.Unknown) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleCountry("");
            writeSingleError(errorCountry);
            return;
        }
        else {
            writeSingleCountry(countryToDefinitionMap[country]?.name!);
        }

        const lengthCheckResult: LengthCheckResult = checkLength(inputString, country);
        if (lengthCheckResult === LengthCheckResult.NotEnough) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleError(errorCodeTooShort);
            return;
        } else if (lengthCheckResult === LengthCheckResult.TooMuch) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleError(errorCodeTooLong);
            return;
        }

        writeSingleIsValid(checkMarkEmoji);
        writeSingleError("");
    } 
    else {
        clearSingle();
    } 
       
}

export function figureOutCountry(input: string) : Country {
    if (input.length < 3) {
        return Country.Unknown; 
    }
    const twoCharCountryCode: string = input.substring(0, 2);

    if (codeToCountryMap[twoCharCountryCode]) {
        return codeToCountryMap[twoCharCountryCode];
    }

    return Country.Unknown;
}

export function checkLength(input: string, country: Country): LengthCheckResult {
    const wantedLength: number = countryToDefinitionMap[country]?.ibanLength!;
    const inputLength: number = input.replace(/\s/g, "").length;

    if (wantedLength === inputLength) {
        return LengthCheckResult.Ok;
    } 
    else if (wantedLength < inputLength) {
        return LengthCheckResult.TooMuch;
    }
    else {
        return LengthCheckResult.NotEnough;
    }
}

export function clearSingle(): void {
    singleIBAN.innerHTML = "";
    singleIsValid.innerHTML = "";
    singleCountry.innerHTML = "";
    singleError.innerHTML = "";
}

export function writeSingleIBAN(iban: string): void {
    singleIBAN.innerHTML = iban;
}

export function writeSingleIsValid(isValid: string): void {
    singleIsValid.innerHTML = isValid;
}

export function writeSingleCountry(country: string): void {
    singleCountry.innerHTML = country;
}

export function writeSingleError(error: string): void {
    singleError.innerHTML = error;
}