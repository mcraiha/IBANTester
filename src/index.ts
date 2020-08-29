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
    flag: string; // Emoji
}

type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

const countryToDefinitionMap: EnumDictionary<Country, CountryDefinition | undefined> = {
    [Country.Albania]: { ibanLength: 28, flag: "🇦🇱"},
    [Country.Algeria]: { ibanLength: 24, flag: "🇩🇿"},
    [Country.Andorra]: { ibanLength: 24, flag: "🇦🇩"},
    [Country.Angola]: { ibanLength: 25, flag: "🇦🇴"},
    [Country.Austria]: { ibanLength: 20, flag: "🇦🇹"},
    [Country.Azerbaijan]: { ibanLength: 28, flag: "🇦🇿"},
    [Country.Bahrain]: { ibanLength: 22, flag: "🇧🇭"},
    [Country.Belarus]: { ibanLength: 28, flag: "🇧🇾"},
    [Country.Belgium]: { ibanLength: 16, flag: "🇧🇪"},
    [Country.Benin]: { ibanLength: 28, flag: "🇧🇯"},
    [Country.BosniaAndHerzegovina]: { ibanLength: 20, flag: "🇧🇦"},
    [Country.Brazil]: { ibanLength: 29, flag: "🇧🇷"},
    [Country.BritishVirginIslands]: { ibanLength: 24, flag: "🇻🇬"},
    [Country.Bulgaria]: { ibanLength: 22, flag: "🇧🇬"},
    [Country.BurkinaFaso]: { ibanLength: 27, flag: "🇧🇫"},
    [Country.Burundi]: { ibanLength: 16, flag: "🇧🇮"},
    [Country.Cameroon]: { ibanLength: 27, flag: "🇨🇲"},
    [Country.CapeVerde]: { ibanLength: 25, flag: "🇨🇻"},
    [Country.CentralAfricanRepublic]: { ibanLength: 27, flag: "🇨🇫"},
    [Country.Congo]: { ibanLength: 27, flag: "🇨🇬"},
    [Country.CostaRica]: { ibanLength: 21, flag: "🇨🇷"},
    [Country.Croatia]: { ibanLength: 21, flag: "🇭🇷"},
    [Country.Cyprus]: { ibanLength: 28, flag: "🇨🇾"},
    [Country.CzechRepublic]: { ibanLength: 24, flag: "🇨🇿"},
    [Country.Denmark]: { ibanLength: 18, flag: "🇩🇰"},
    [Country.DominicanRepublic]: { ibanLength: 28, flag: "🇩🇴"},
    [Country.Egypt]: { ibanLength: 27, flag: "🇪🇬"},
    [Country.Estonia]: { ibanLength: 20, flag: "🇪🇪"},
    [Country.FaroeIslands]: { ibanLength: 18, flag: "🇫🇴"},
    [Country.Finland]: { ibanLength: 18, flag: "🇫🇮"},
    [Country.France]: { ibanLength: 27, flag: "🇫🇷"},
    [Country.FrenchGuiana]: { ibanLength: 27, flag: "🇬🇫"},
    [Country.FrenchPolynesia]: { ibanLength: 27, flag: "🇵🇫"},
    [Country.Gabon]: { ibanLength: 27, flag: "🇬🇦"},
    [Country.Georgia]: { ibanLength: 22, flag: "🇬🇪"},
    [Country.Germany]: { ibanLength: 22, flag: "🇩🇪"},
    [Country.Gibraltar]: { ibanLength: 23, flag: "🇬🇮"},
    [Country.Greece]: { ibanLength: 27, flag: "🇬🇷"},
    [Country.Greenland]: { ibanLength: 18, flag: "🇬🇱"},
    [Country.Guadeloupe]: { ibanLength: 27, flag: "🇬🇵"},
    [Country.Guatemala]: { ibanLength: 28, flag: "🇬🇹"},
    [Country.Guernsey]: { ibanLength: 22, flag: "🇬🇬"},
    [Country.Hungary]: { ibanLength: 28, flag: "🇭🇺"},
    [Country.Iceland]: { ibanLength: 26, flag: "🇮🇸"},
    [Country.Iran]: { ibanLength: 26, flag: "🇮🇷"},
    [Country.Iraq]: { ibanLength: 23, flag: "🇮🇶"},
    [Country.Ireland]: { ibanLength: 22, flag: "🇮🇪"},
    [Country.IsleOfMan]: { ibanLength: 22, flag: "🇮🇲"},
    [Country.Israel]: { ibanLength: 23, flag: "🇮🇱"},
    [Country.Italy]: { ibanLength: 27, flag: "🇮🇹"},
    [Country.IvoryCoast]: { ibanLength: 28, flag: "🇨🇮"},
    [Country.Jersey]: { ibanLength: 22, flag: "🇯🇪"},
    [Country.Jordan]: { ibanLength: 30, flag: "🇯🇴"},
    [Country.Kazakhstan]: { ibanLength: 20, flag: "🇰🇿"},
    [Country.Kosovo]: { ibanLength: 20, flag: "🇽🇰"},
    [Country.Kuwait]: { ibanLength: 30, flag: "🇰🇼"},
    [Country.Latvia]: { ibanLength: 21, flag: "🇱🇻"},
    [Country.Lebanon]: { ibanLength: 28, flag: "🇱🇧"},
    [Country.Liechtenstein]: { ibanLength: 21, flag: "🇱🇮"},
    [Country.Lithuania]: { ibanLength: 20, flag: "🇱🇹"},
    [Country.Luxembourg]: { ibanLength: 20, flag: "🇱🇺"},
    [Country.NorthMacedonia]: { ibanLength: 19, flag: "🇲🇰"},
    [Country.Madagascar]: { ibanLength: 27, flag: "🇲🇬"},
    [Country.Mali]: { ibanLength: 28, flag: "🇲🇱"},
    [Country.Malta]: { ibanLength: 31, flag: "🇲🇹"},
    [Country.Martinique]: { ibanLength: 27, flag: "🇲🇶"},
    [Country.Mauritania]: { ibanLength: 27, flag: "🇲🇷"},
    [Country.Mauritius]: { ibanLength: 30, flag: "🇲🇺"},
    [Country.Moldova]: { ibanLength: 24, flag: "🇲🇩"},
    [Country.Monaco]: { ibanLength: 27, flag: "🇲🇨"},
    [Country.Montenegro]: { ibanLength: 22, flag: "🇲🇪"},
    [Country.Mozambique]: { ibanLength: 25, flag: "🇲🇿"},
    [Country.Netherlands]: { ibanLength: 18, flag: "🇳🇱"},
    [Country.NewCaledonia]: { ibanLength: 27, flag: "🇳🇨"},
    [Country.Norway]: { ibanLength: 15, flag: "🇳🇴"},
    [Country.Pakistan]: { ibanLength: 24, flag: "🇵🇰"},
    [Country.Palestine]: { ibanLength: 29, flag: "🇵🇸"},
    [Country.Poland]: { ibanLength: 28, flag: "🇵🇱"},
    [Country.Portugal]: { ibanLength: 25, flag: "🇵🇹"},
    [Country.Qatar]: { ibanLength: 29, flag: "🇶🇦"},
    [Country.Réunion]: { ibanLength: 27, flag: "🇷🇪"},
    [Country.Romania]: { ibanLength: 24, flag: "🇷🇴"},
    [Country.SaintLucia]: { ibanLength: 32, flag: "🇱🇨"},
    [Country.SaintPierreAndMiquelon]: { ibanLength: 27, flag: "🇵🇲"},
    [Country.SanMarino]: { ibanLength: 27, flag: "🇸🇲"},
    [Country.SaoTomeAndPrincipe]: { ibanLength: 25, flag: "🇸🇹"},
    [Country.SaudiArabia]: { ibanLength: 24, flag: "🇸🇦"},
    [Country.Senegal]: { ibanLength: 28, flag: "🇸🇳"},
    [Country.Serbia]: { ibanLength: 22, flag: "🇷🇸"},
    [Country.Seychelles]: { ibanLength: 31, flag: "🇸🇨"},
    [Country.Slovakia]: { ibanLength: 24, flag: "🇸🇰"},
    [Country.Slovenia]: { ibanLength: 19, flag: "🇸🇮"},
    [Country.Spain]: { ibanLength: 24, flag: "🇪🇸"},
    [Country.Sweden]: { ibanLength: 24, flag: "🇸🇪"},
    [Country.Switzerland]: { ibanLength: 21, flag: "🇨🇭"},
    [Country.TimorLeste]: { ibanLength: 23, flag: "🇹🇱"},
    [Country.Tunisia]: { ibanLength: 24, flag: "🇹🇳"},
    [Country.Turkey]: { ibanLength: 26, flag: "🇹🇷"},
    [Country.Ukraine]: { ibanLength: 29, flag: "🇺🇦"},
    [Country.UnitedArabEmirates]: { ibanLength: 23, flag: "🇦🇪"},
    [Country.UnitedKingdom]: { ibanLength: 22, flag: "🇬🇧"},
    [Country.VaticanCityState]: { ibanLength: 22, flag: "🇻🇦"},
    [Country.WallisAndFutuna]: { ibanLength: 27, flag: "🇼🇫"},

    [Country.Unknown]: { ibanLength: 0, flag: "Unknown"},
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

interface IBANCheckResult {
    ibanWithoutWhitespace: string;
    isValidChar: string;
    country: string;
    possibleError: string;
}

/** 
 * Init begins
 */
if ('serviceWorker' in navigator) {
    //navigator.serviceWorker.register('sw.js');
}

let showCountyFlags: boolean = true;

const ibanCode: HTMLElement = document.getElementById('ibanCode')!;
if (ibanCode) {
    const ibanCodeInput = <HTMLInputElement>ibanCode;
    ibanCodeInput.disabled = false;
    ibanCode.addEventListener('input', testIBAN);
}

const ibanCodeLabel: HTMLElement = document.getElementById('ibanCodeLabel')!;

const ibanCodes: HTMLElement = document.getElementById('ibanCodes')!;
if (ibanCodes) {
    const ibanCodesInput = <HTMLInputElement>ibanCodes;
    ibanCodesInput.disabled = false;
    ibanCodes.addEventListener('input', testIBANs);
}

const ibanCodesLabel: HTMLElement = document.getElementById('ibanCodesLabel')!;

const singlemodeselectedparent: HTMLElement = document.getElementById('singlemodeselectedparent')!;
const multimodeselectedparent: HTMLElement = document.getElementById('multimodeselectedparent')!;

const singleModeLink: HTMLElement = document.getElementById('singlemodelink')!;
if (singleModeLink) {
    const singleModeLinkInput = <HTMLInputElement>singleModeLink;
    singleModeLinkInput.addEventListener('click', () => selectSingleMode());
}

const multiModeLink: HTMLElement = document.getElementById('multimodelink')!;
if (multiModeLink) {
    const multiModeLinkInput = <HTMLInputElement>multiModeLink;
    multiModeLinkInput.addEventListener('click', () => selectMultiMode());
}

const htmlmodeselectedparent: HTMLElement = document.getElementById('htmlselectedparent')!;
const csvmodeselectedparent: HTMLElement = document.getElementById('csvselectedparent')!;

const htmlModeLink: HTMLElement = document.getElementById('htmllink')!;
if (htmlModeLink) {
    const htmlModeLinkInput = <HTMLInputElement>htmlModeLink;
    htmlModeLinkInput.addEventListener('click', () => selectHTMLOutput());
}

const csvModeLink: HTMLElement = document.getElementById('csvlink')!;
if (csvModeLink) {
    const csvModeLinkInput = <HTMLInputElement>csvModeLink;
    csvModeLinkInput.addEventListener('click', () => selectCSVOutput());
}

const showFlags: HTMLElement = document.getElementById('showFlags')!;
if (showFlags) {
    const showFlagsInput = <HTMLInputElement>showFlags;
    showFlagsInput.checked = showCountyFlags;
    showFlagsInput.addEventListener('change', changeShowFlags);
}

const checkMarkEmoji: string = "✔️";
const crossMarkEmoji: string = "❌";

const errorAlphaNumericals: string = "Only alphanumerics are allowed!";
const errorCountry: string = "Cannot identify country code!";
const errorCodeTooShort: string = "IBAN is too short!";
const errorCodeTooLong: string = "IBAN is too long!";
const errorInvalidChecksum: string = "Invalid checksum!";

const clonedTableRows: Array<Node> = [];
const cloneThisForTable: HTMLElement = document.getElementById('cloneThisForTable')!;

const csvTextArea: HTMLElement = document.getElementById('csv')!;
const csvTextAreaInput: HTMLInputElement = <HTMLInputElement>csvTextArea;

const copycsvButton: HTMLElement = document.getElementById('copycsv')!;
const copycsvButtonInput = <HTMLInputElement>copycsvButton;
copycsvButtonInput.onclick = copyCSVToClipboard;

const savecsvButton: HTMLElement = document.getElementById('savecsv')!;
const savecsvButtonInput = <HTMLInputElement>savecsvButton;
savecsvButtonInput.onclick = saveCSVToFile;

const searchParams: string = window.location.search;
const parameters: URLSearchParams = new URLSearchParams(searchParams);

if (parameters.has('iban')) {
    const inputIBAN: string = parameters.get('iban')!;
    if (inputIBAN.includes(",")) {
        const ibanCodesInput = <HTMLInputElement>ibanCodes;
        ibanCodesInput.value = inputIBAN;
        selectMultiMode();
        testMultipleIBAN(inputIBAN);
    }
    else {
        const ibanCodeInput = <HTMLInputElement>ibanCode;
        ibanCodeInput.value = inputIBAN;
        selectSingleMode();
        testSingleIBAN(inputIBAN, cloneThisForTable);
    }
}
else
{
    // We default to single mode
    selectSingleMode();
}

selectHTMLOutput();

fillBuildInfo('buildinfo', buildDate, gitShortHash);

/** 
 * Init ends
 */

export function testIBAN(event: Event): void {
    const inputString: string = (<HTMLInputElement>event.target).value;
    testSingleIBAN(inputString, cloneThisForTable);
}

export function testIBANs(event: Event): void {
    const inputString: string = (<HTMLInputElement>event.target).value;
    testMultipleIBAN(inputString);
}

export function testSingleIBAN(input: string, parent: HTMLElement): void {
    let checkValue: IBANCheckResult = actualTestSingleIBAN(input);

    if (checkValue.ibanWithoutWhitespace) {
        writeSingleEntry(checkValue.ibanWithoutWhitespace, checkValue.isValidChar, checkValue.country, checkValue.possibleError, parent);
        csvTextAreaInput.value = generateCSVText([checkValue]);
    }
    else {
        clearSingle(parent);
        csvTextAreaInput.value = "";
    }
}

export function testMultipleIBAN(input: string): void {
    const splitted: string[] = input.split(',');
    const onlyValues: string[] = splitted.filter(x => x);
    const checkResults: Array<IBANCheckResult> = [];

    for (const value of onlyValues) {
        checkResults.push(actualTestSingleIBAN(value));
    }

    createEnoughTableRows(onlyValues.length);
    for (let i = 0; i < onlyValues.length; i++) {
        let checkValue: IBANCheckResult = checkResults[i];
        writeSingleEntry(checkValue.ibanWithoutWhitespace, checkValue.isValidChar, checkValue.country, checkValue.possibleError, clonedTableRows[i] as HTMLElement);
    }

    if (checkResults.length < 1) {
        csvTextAreaInput.value = "";
    } 
    else {
        csvTextAreaInput.value = generateCSVText(checkResults);
    }
}

export function actualTestSingleIBAN(input: string): IBANCheckResult {
    let returnValue: IBANCheckResult = {} as IBANCheckResult;
    if (input) {
        // Remove all whitespace
        input = input.replace(/\s/g, "");
        // Remove dangerous characters from IBAN (if there are any)
        returnValue.ibanWithoutWhitespace = makeStringSafe(input);
        returnValue.isValidChar = crossMarkEmoji;
        returnValue.country = "";

        // Only alphanumericals are allowed
        if (!input.match(/^[0-9A-Z ]+$/)) {
            returnValue.possibleError = errorAlphaNumericals;
            return returnValue;
        }

        const country: Country = figureOutCountry(input);
        if (country === Country.Unknown) {
            returnValue.possibleError = errorCountry;
            return returnValue;
        }

        const countryName: HTMLElement = document.getElementById(Country[country])!;
        returnValue.country = countryName.innerText;
        if (showCountyFlags) {
            returnValue.country += ` ${countryToDefinitionMap[country]?.flag}`;
        }

        const lengthCheckResult: LengthCheckResult = checkLength(input, country);
        if (lengthCheckResult === LengthCheckResult.NotEnough) {
            returnValue.possibleError = errorCodeTooShort;
            return returnValue;
        } else if (lengthCheckResult === LengthCheckResult.TooMuch) {
            returnValue.possibleError = errorCodeTooLong;
            return returnValue;
        }

        if (!checkChecksum(input)) {
            returnValue.possibleError = errorInvalidChecksum;
            return returnValue;
        }

        // SUCCESS POINT
        returnValue.isValidChar = checkMarkEmoji;
        returnValue.possibleError = "";
        return returnValue;
    }
    
    return returnValue;
}

export function renderHTMLForSingleIBAN(input: IBANCheckResult, parent: HTMLElement) {
    writeSingleEntry(input.ibanWithoutWhitespace, input.isValidChar, input.country, input.possibleError, parent);
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

export function makeStringSafe(input: string): string {
    const removeThese: string[] = ["\\<", "\\>", "\\[", "\\]", '\\"'];
    let modify: string = input;
    
    for (const remove of removeThese) {
        const removeRegExp: RegExp = new RegExp(remove, 'g');
        modify = modify.replace(removeRegExp, "");
    }

    return modify;
}

/*
* CSV related operations
*/

export function copyCSVToClipboard(): void {
    csvTextAreaInput.select();
    document.execCommand("copy");
}

export function saveCSVToFile(): void {
    const filename: string = "iban.csv";
    const file: Blob = new Blob([csvTextAreaInput.value], {type: 'text/plain'});

    const a = document.createElement('a');
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();

	URL.revokeObjectURL(a.href);
}

export function generateCSVText(ibanCheckResults: IBANCheckResult[]): string {
    const firstLine: string = "IBAN, Is valid, Country, Error";
    const checkedIbans: Array<string> = [];
    for (const result of ibanCheckResults) {
        if (result.ibanWithoutWhitespace) {
            checkedIbans.push(`${result.ibanWithoutWhitespace}, ${result.isValidChar}, ${result.country}, ${result.possibleError}`);
        }
        
    }
    
    return `${firstLine}\r\n${checkedIbans.join("\r\n")}`;
}

/*
* DOM modifications
*/

export function selectSingleMode(): void {
    ibanCodeLabel.hidden = false;
    ibanCode.hidden = false;

    ibanCodesLabel.hidden = true;
    ibanCodes.hidden = true;

    singlemodeselectedparent.hidden = false;
    multimodeselectedparent.hidden = true;

    createEnoughTableRows(0);
}

export function selectMultiMode(): void {
    ibanCodeLabel.hidden = true;
    ibanCode.hidden = true;

    ibanCodesLabel.hidden = false;
    ibanCodes.hidden = false;

    singlemodeselectedparent.hidden = true;
    multimodeselectedparent.hidden = false;

    clearSingle(cloneThisForTable);
}

export function selectHTMLOutput(): void {
    htmlmodeselectedparent.hidden = false;
    csvmodeselectedparent.hidden = true;
}

export function selectCSVOutput(): void {
    htmlmodeselectedparent.hidden = true;
    csvmodeselectedparent.hidden = false;
}

export function changeShowFlags(event: Event): void {
    showCountyFlags = (<HTMLInputElement>event.target).checked;
}

export function clearSingle(parent: HTMLElement): void {
    writeSingleEntry("", "", "", "", parent);
}

export function writeSingleEntry(iban: string, isValid: string, country: string, error: string, parent: HTMLElement): void {
    writeSingleIBAN(iban, parent);
    writeSingleIsValid(isValid, parent);
    writeSingleCountry(country, parent);
    writeSingleError(error, parent);
}

export function writeSingleIBAN(iban: string, parent: HTMLElement): void {
    const ibanElement: HTMLElement = parent.querySelector("#IBAN")! as HTMLElement;
    ibanElement.innerHTML = iban;
}

export function writeSingleIsValid(isValid: string, parent: HTMLElement): void {
    const isValidElement: HTMLElement = parent.querySelector("#IsValid")! as HTMLElement;
    isValidElement.innerHTML = isValid;
}

export function writeSingleCountry(country: string, parent: HTMLElement): void {
    const countryElement: HTMLElement = parent.querySelector("#Country")! as HTMLElement;
    countryElement.innerHTML = country;
}

export function writeSingleError(error: string, parent: HTMLElement): void {
    const errorElement: HTMLElement = parent.querySelector("#Error")! as HTMLElement;
    errorElement.innerHTML = error;
}

export function createEnoughTableRows(wanted: number): void {
    if (wanted > clonedTableRows.length) {
        while (wanted > clonedTableRows.length) {
            const clone = cloneThisForTable.cloneNode(true);
            cloneThisForTable.before(clone);
            const cloneHTMLElement: HTMLElement = clone as HTMLElement;
            cloneHTMLElement.id = ""; 
            clonedTableRows.push(clone);
        }
    } 
    else if (wanted < clonedTableRows.length) {
        while (wanted < clonedTableRows.length) {
            const child: Node = clonedTableRows.pop()!;
            child.parentNode?.removeChild(child);  
        }
    }
}

export function fillBuildInfo(elementName: string, day: string, shortHash: string): void {
    const buildElement: HTMLElement = document.getElementById(elementName)!;
    buildElement.innerHTML = `${day} <a href="https://github.com/mcraiha/IBANTester/commit/${shortHash}">#${shortHash}</a>`;
}