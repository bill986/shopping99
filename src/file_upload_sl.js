/**
*@NApiVersion 2.x
*@NScriptType Suitelet
*/
define(['N/ui/serverWidget', 'N/encode', 'N/file'],
    function(serverWidget, encode, file) {
        function onRequest(context) {
            if (context.request.method === 'GET') {
                var form = serverWidget.createForm({
                    title: 'Simple Form'
                });

                var field = form.addField({
                    id: 'custpage_file',
                    type: 'file',
                    label: 'Document'
                });

                form.addSubmitButton({
                    label: 'Submit Button'
                });

                context.response.writePage(form);
            } else {
                log.debug('context.request.body',context.request)
                var fileObj = file.create({ 
                    name: 'test.txt',
                    fileType: file.Type.PLAINTEXT,
                    contents: JSON.stringify(JSON.parse(context.request.parameters.confirmationText)),
                    folder: 1378,
                    isOnline: false 
                });
                var fileId = fileObj.save();
            //   var fileObj = context.request.files.custpage_file;
            //   log.debug('fileObj.size',fileObj.size)
            //     if (fileObj.size < 10485760){
            //         log.debug('getContents',fileObj.getContents());
            //         var xmlStr = fileObj.getContents()
            //         var strXmlEncoded = encode.convert({
            //             string : xmlStr,
            //             inputEncoding : encode.Encoding.UTF_8,
            //             outputEncoding : encode.Encoding.BASE_64
            //         });
            //         log.debug('strXmlEncoded',strXmlEncoded);
            //     }
            //   fileObj.folder = 1378; //replace with own folder ID
            //   var id = fileObj.save();
            }

            
    }

    return {
        onRequest: onRequest
    };
});