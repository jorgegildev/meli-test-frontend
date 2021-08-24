import qs from "qs";

export const formatPrice = price => {
    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    if (price % 1 === 0){
        return price.toString().replace(regex, '$1.');
    }
    return price.toFixed(2).replace('.', ',')
        .replace(regex, '$1.');
}

export const formatKeyword = keyword => {
    keyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim();
    return qs.parse(keyword, { ignoreQueryPrefix: true }).search;
}
