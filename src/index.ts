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
const codeToCountryMap: codeToCountry = {
    "AD": Country.Andorra,
    "AE": Country.UnitedArabEmirates,
    "AL": Country.Albania,
    "AO": Country.Angola,
    "AT": Country.Austria,
    "AZ": Country.Azerbaijan,
    
    "BA": Country.BosniaAndHerzegovina,
    "BE": Country.Belgium,
    "BF": Country.BurkinaFaso,
    "BG": Country.Bulgaria,
    "BH": Country.Bahrain,
    "BI": Country.Burundi,
    "BJ": Country.Benin,
    "BR": Country.Brazil,
    "BY": Country.Belarus,
    
    "CG": Country.Congo,
    "CH": Country.Switzerland,
    "CI": Country.IvoryCoast,
    "CM": Country.Cameroon,
    "CR": Country.CostaRica,
    "CV": Country.CapeVerde,
    "CY": Country.Cyprus,
    "CZ": Country.CzechRepublic,
    
    "DE": Country.Germany,
    "DK": Country.Denmark,
    "DO": Country.DominicanRepublic,
    "DZ": Country.Algeria,
    
    "EE": Country.Estonia,
    "EG": Country.Egypt,
    "ES": Country.Spain,
    
    "FI": Country.Finland,
    "FO": Country.FaroeIslands,
    "FR": Country.France,
    
    "GA": Country.Gabon,
    "GB": Country.UnitedKingdom,
    "GE": Country.Georgia,
    "GG": Country.Guernsey,
    "GI": Country.Gibraltar,
    "GL": Country.Greenland,
    "GR": Country.Greece,
    "GT": Country.Guatemala,
    
    "HR": Country.Croatia,
    "HU": Country.Hungary,

    "IE": Country.Ireland,
    "IL": Country.Israel,
    "IM": Country.IsleOfMan,
    "IQ": Country.Iraq,
    "IR": Country.Iran,
    "IS": Country.Iceland,
    "IT": Country.Italy,

    "JE": Country.Jersey,
    "JO": Country.Jordan,

    "KW": Country.Kuwait,
    "KZ": Country.Kazakhstan,

    "LB": Country.Lebanon,
    "LC": Country.SaintLucia,
    "LI": Country.Liechtenstein,
    "LT": Country.Lithuania,
    "LU": Country.Luxembourg,
    "LV": Country.Latvia,

    "MC": Country.Monaco,
    "MD": Country.Moldova,
    "ME": Country.Montenegro, 
    "MG": Country.Madagascar,
    "MK": Country.NorthMacedonia,
    "ML": Country.Mali,
    "MR": Country.Mauritania,
    "MT": Country.Malta,
    "MU": Country.Mauritius,
    "MZ": Country.Mozambique,

    "NL": Country.Netherlands,
    "NO": Country.Norway,

    "PK": Country.Pakistan,
    "PL": Country.Poland,
    "PS": Country.Palestine,
    "PT": Country.Portugal,

    "QA": Country.Qatar,

    "RO": Country.Romania,
    "RS": Country.Serbia,

    "SA": Country.SaudiArabia,
    "SC": Country.Seychelles,
    "SE": Country.Sweden,
    "SI": Country.Slovenia,
    "SK": Country.Slovakia,
    
    "SM": Country.SanMarino,
    "SN": Country.Senegal,
    "ST": Country.SaoTomeAndPrincipe,

    "TL": Country.TimorLeste,
    "TN": Country.Tunisia,
    "TR": Country.Turkey,

    "UA": Country.Ukraine,
    
    "VA": Country.VaticanCityState,
    "VG": Country.BritishVirginIslands,

    "XK": Country.Kosovo,
};

interface CountryDefinition {
    ibanLength: number;
    name: string;
}

type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

const countryToDefinitionMap: EnumDictionary<Country, CountryDefinition | undefined> = {
    [Country.Albania]: { ibanLength: 28, name: "Albania"},
    [Country.Algeria]: { ibanLength: 24, name: "Algeria"},
    [Country.Andorra]: { ibanLength: 24, name: "Andorra"},
    [Country.Angola]: { ibanLength: 25, name: "Angola"},
    [Country.Austria]: { ibanLength: 20, name: "Austria"},
    [Country.Azerbaijan]: { ibanLength: 28, name: "Azerbaijan"},
    [Country.Bahrain]: { ibanLength: 22, name: "Bahrain"},
    [Country.Belarus]: { ibanLength: 28, name: "Belarus"},
    [Country.Belgium]: { ibanLength: 16, name: "Belgium"},
    [Country.Benin]: { ibanLength: 28, name: "Benin"},
    [Country.BosniaAndHerzegovina]: { ibanLength: 20, name: "BosniaAndHerzegovina"},
    [Country.Brazil]: { ibanLength: 29, name: "Brazil"},
    [Country.BritishVirginIslands]: { ibanLength: 24, name: "BritishVirginIslands"},
    [Country.Bulgaria]: { ibanLength: 22, name: "Bulgaria"},
    [Country.BurkinaFaso]: { ibanLength: 27, name: "BurkinaFaso"},
    [Country.Burundi]: { ibanLength: 16, name: "Burundi"},
    [Country.Cameroon]: { ibanLength: 27, name: "Cameroon"},
    [Country.CapeVerde]: { ibanLength: 25, name: "CapeVerde"},
    [Country.CentralAfricanRepublic]: { ibanLength: 27, name: "CentralAfricanRepublic"},
    [Country.Congo]: { ibanLength: 27, name: "Congo"},
    [Country.CostaRica]: { ibanLength: 21, name: "CostaRica"},
    [Country.Croatia]: { ibanLength: 21, name: "Croatia"},
    [Country.Cyprus]: { ibanLength: 28, name: "Cyprus"},
    [Country.CzechRepublic]: { ibanLength: 24, name: "CzechRepublic"},
    [Country.Denmark]: { ibanLength: 18, name: "Denmark"},
    [Country.DominicanRepublic]: { ibanLength: 28, name: "DominicanRepublic"},
    [Country.Egypt]: { ibanLength: 27, name: "Egypt"},
    [Country.Estonia]: { ibanLength: 20, name: "Estonia"},
    [Country.FaroeIslands]: { ibanLength: 18, name: "FaroeIslands"},
    [Country.Finland]: { ibanLength: 18, name: "Finland"},
    [Country.France]: { ibanLength: 27, name: "France"},
    [Country.FrenchGuiana]: { ibanLength: 27, name: "FrenchGuiana"},
    [Country.FrenchPolynesia]: { ibanLength: 27, name: "FrenchPolynesia"},
    [Country.Gabon]: { ibanLength: 27, name: "Gabon"},
    [Country.Georgia]: { ibanLength: 22, name: "Georgia"},
    [Country.Germany]: { ibanLength: 22, name: "Germany"},
    [Country.Gibraltar]: { ibanLength: 23, name: "Gibraltar"},
    [Country.Greece]: { ibanLength: 27, name: "Greece"},
    [Country.Greenland]: { ibanLength: 18, name: "Greenland"},
    [Country.Guadeloupe]: { ibanLength: 27, name: "Guadeloupe"},
    [Country.Guatemala]: { ibanLength: 28, name: "Guatemala"},
    [Country.Guernsey]: { ibanLength: 22, name: "Guernsey"},
    [Country.Hungary]: { ibanLength: 28, name: "Hungary"},
    [Country.Iceland]: { ibanLength: 26, name: "Iceland"},
    [Country.Iran]: { ibanLength: 26, name: "Iran"},
    [Country.Iraq]: { ibanLength: 23, name: "Iraq"},
    [Country.Ireland]: { ibanLength: 22, name: "Ireland"},
    [Country.IsleOfMan]: { ibanLength: 22, name: "IsleOfMan"},
    [Country.Israel]: { ibanLength: 23, name: "Israel"},
    [Country.Italy]: { ibanLength: 27, name: "Italy"},
    [Country.IvoryCoast]: { ibanLength: 28, name: "IvoryCoast"},
    [Country.Jersey]: { ibanLength: 22, name: "Jersey"},
    [Country.Jordan]: { ibanLength: 30, name: "Jordan"},
    [Country.Kazakhstan]: { ibanLength: 20, name: "Kazakhstan"},
    [Country.Kosovo]: { ibanLength: 20, name: "Kosovo"},
    [Country.Kuwait]: { ibanLength: 30, name: "Kuwait"},
    [Country.Latvia]: { ibanLength: 21, name: "Latvia"},
    [Country.Lebanon]: { ibanLength: 28, name: "Lebanon"},
    [Country.Liechtenstein]: { ibanLength: 21, name: "Liechtenstein"},
    [Country.Lithuania]: { ibanLength: 20, name: "Lithuania"},
    [Country.Luxembourg]: { ibanLength: 20, name: "Luxembourg"},
    [Country.NorthMacedonia]: { ibanLength: 19, name: "NorthMacedonia"},
    [Country.Madagascar]: { ibanLength: 27, name: "Madagascar"},
    [Country.Mali]: { ibanLength: 28, name: "Mali"},
    [Country.Malta]: { ibanLength: 31, name: "Malta"},
    [Country.Martinique]: { ibanLength: 27, name: "Martinique"},
    [Country.Mauritania]: { ibanLength: 27, name: "Mauritania"},
    [Country.Mauritius]: { ibanLength: 30, name: "Mauritius"},
    [Country.Moldova]: { ibanLength: 24, name: "Moldova"},
    [Country.Monaco]: { ibanLength: 27, name: "Monaco"},
    [Country.Montenegro]: { ibanLength: 22, name: "Montenegro"},
    [Country.Mozambique]: { ibanLength: 25, name: "Mozambique"},
    [Country.Netherlands]: { ibanLength: 18, name: "Netherlands"},
    [Country.NewCaledonia]: { ibanLength: 27, name: "NewCaledonia"},
    [Country.Norway]: { ibanLength: 15, name: "Norway"},
    [Country.Pakistan]: { ibanLength: 24, name: "Pakistan"},
    [Country.Palestine]: { ibanLength: 29, name: "Palestine"},
    [Country.Poland]: { ibanLength: 28, name: "Poland"},
    [Country.Portugal]: { ibanLength: 25, name: "Portugal"},
    [Country.Qatar]: { ibanLength: 29, name: "Qatar"},
    [Country.Réunion]: { ibanLength: 27, name: "Réunion"},
    [Country.Romania]: { ibanLength: 24, name: "Romania"},
    [Country.SaintLucia]: { ibanLength: 32, name: "SaintLucia"},
    [Country.SaintPierreAndMiquelon]: { ibanLength: 27, name: "SaintPierreAndMiquelon"},
    [Country.SanMarino]: { ibanLength: 27, name: "SanMarino"},
    [Country.SaoTomeAndPrincipe]: { ibanLength: 25, name: "SaoTomeAndPrincipe"},
    [Country.SaudiArabia]: { ibanLength: 24, name: "SaudiArabia"},
    [Country.Senegal]: { ibanLength: 28, name: "Senegal"},
    [Country.Serbia]: { ibanLength: 22, name: "Serbia"},
    [Country.Seychelles]: { ibanLength: 31, name: "Seychelles"},
    [Country.Slovakia]: { ibanLength: 24, name: "Slovakia"},
    [Country.Slovenia]: { ibanLength: 19, name: "Slovenia"},
    [Country.Spain]: { ibanLength: 24, name: "Spain"},
    [Country.Sweden]: { ibanLength: 24, name: "Sweden"},
    [Country.Switzerland]: { ibanLength: 21, name: "Switzerland"},
    [Country.TimorLeste]: { ibanLength: 23, name: "TimorLeste"},
    [Country.Tunisia]: { ibanLength: 24, name: "Tunisia"},
    [Country.Turkey]: { ibanLength: 26, name: "Turkey"},
    [Country.Ukraine]: { ibanLength: 29, name: "Ukraine"},
    [Country.UnitedArabEmirates]: { ibanLength: 23, name: "UnitedArabEmirates"},
    [Country.UnitedKingdom]: { ibanLength: 22, name: "UnitedKingdom"},
    [Country.VaticanCityState]: { ibanLength: 22, name: "VaticanCityState"},
    [Country.WallisAndFutuna]: { ibanLength: 27, name: "WallisAndFutuna"},

    [Country.Unknown]: { ibanLength: 0, name: "Unknown"},
}

type ibanCharToNumber = Record<string, string>;
const ibanCharToNumberMap: ibanCharToNumber = { 
    "A": "10",
    "B": "11",
    "C": "12",
    "D": "13",
    "E": "14",
    "F": "15",
    "G": "16",
    "H": "17",
    "I": "18",
    "J": "19",
    "K": "20",
    "L": "21",
    "M": "22",
    "N": "23",
    "O": "24",
    "P": "25",
    "Q": "26",
    "R": "27",
    "S": "28",
    "T": "29",
    "U": "30",
    "V": "31",
    "W": "32",
    "X": "33",
    "Y": "34",
    "Z": "35",
};

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
const errorInvalidChecksum: string = "Invalid checksum!";

const searchParams: string = window.location.search;
const parameters: URLSearchParams = new URLSearchParams(searchParams);

if (parameters.has('iban')) {
    const inputIBAN: string = parameters.get('iban')!;
    const ibanCodeInput = <HTMLInputElement>ibanCode;
    ibanCodeInput.value = inputIBAN;
    testSingleIBAN(inputIBAN);
}

/** 
 * Init ends
 */

export function testIBAN(event: Event): void {
    const inputString: string = (<HTMLInputElement>event.target).value;
    testSingleIBAN(inputString);
}

export function testSingleIBAN(input: string): void {
    if (input) {
        // Remove all whitespace
        input = input.replace(/\s/g, "");

        // Write IBAN
        writeSingleIBAN(makeStringSafe(input));

        // Only alphanumericals are allowed
        if (!input.match(/^[0-9A-Z ]+$/)) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleCountry("");
            writeSingleError(errorAlphaNumericals);
            return;
        }

        const country: Country = figureOutCountry(input);
        if (country === Country.Unknown) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleCountry("");
            writeSingleError(errorCountry);
            return;
        }
        else {
            writeSingleCountry(countryToDefinitionMap[country]?.name!);
        }

        const lengthCheckResult: LengthCheckResult = checkLength(input, country);
        if (lengthCheckResult === LengthCheckResult.NotEnough) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleError(errorCodeTooShort);
            return;
        } else if (lengthCheckResult === LengthCheckResult.TooMuch) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleError(errorCodeTooLong);
            return;
        }

        if (!checkChecksum(input)) {
            writeSingleIsValid(crossMarkEmoji);
            writeSingleError(errorInvalidChecksum);
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
    if (input.length < 2) {
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

export function checkChecksum(input: string): boolean {
    // Reorder, e.g. GB82 WEST 1234 5698 7654 32 -> WEST 1234 5698 7654 32GB 82
    let reordered: string = input.substring(4) + input.substring(0, 4);

    // Replace alphabets with numbers, e.g. WEST 1234 5698 7654 32GB 82 -> 32142829123456987654321611 82	
    for (const key of Object.keys(ibanCharToNumberMap)) {
        if (reordered.includes(key)) {
            const searchRegExp = new RegExp(key, 'g');
            reordered = reordered.replace(searchRegExp, ibanCharToNumberMap[key]);
        }
    }

    // Do modulo check (BigInt would be nice)
    const firstNineDigits: string = reordered.substring(0, 9);
    reordered = reordered.substring(9);
    const firstNumber: number = Number(firstNineDigits);
    let currentModulo: number = firstNumber % 97;
    while (reordered.length > 6) {
        const currentNumberAsString: string = currentModulo + reordered.substring(0, 7);
        reordered = reordered.substring(7);
        const currentNumber: number = Number(currentNumberAsString);
        currentModulo = currentNumber % 97;
    }

    const finalNumberAsString: string = currentModulo + reordered;
    const finalNumber: number = Number(finalNumberAsString);
    currentModulo = finalNumber % 97;

    return (currentModulo === 1);
}

export function makeStringSafe(syote: string): string {
    const removeThese: string[] = ["\\<", "\\>", "\\[", "\\]", '\\"'];
    let modify: string = syote;
    
    for (const remove of removeThese) {
        const removeRegExp: RegExp = new RegExp(remove, 'g');
        modify = modify.replace(removeRegExp, "");
    }

    return modify;
}

/*
* DOM modifications
*/

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