public with sharing class ContactController {
    public ContactController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [Select Name, Title, Phone, Email, PictureCon__c, Picture__C From Contact];
    }
}
