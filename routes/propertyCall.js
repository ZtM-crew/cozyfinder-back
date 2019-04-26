const request = require('request');
const convert = require('xml-js');

/**
 Zillow API call happens here. Latitude and longitude are the GPS location of the neighbourhood, provided in the search field.
 ResultNums is an integer, size of the
 **/

const apiCall = (req, res) =>{

    const endpoint = 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1gww0l2iozv_1651t';
    const city = req.params.city;
    const url = endpoint + '&state=ny&city=' + city + '&childtype=neighborhood';

    request(url, (err, resp) => {
        if(!err && resp.statusCode === 200) {
            let result = convert.xml2json(resp.body, {compact: true, spaces:4});
            console.log(city)

            const dat = JSON.parse(result)
            const propObj = {
                latitude: dat['RegionChildren:regionchildren']['response']['region']['latitude']['_text'],
                longitude: dat['RegionChildren:regionchildren']['response']['region']['longitude']['_text'],
                resultNums: dat['RegionChildren:regionchildren']['response']['list']['count']['_text'],
                resultList: dat['RegionChildren:regionchildren']['response']['list']['region']


            }

            //console.log(propObj)     //Backend console listing all the New York neighbourhoods objects
            res.send(propObj)
        }
        else{
            console.log(err)
        }
    })


};

module.exports = {
    apiCall
};
