public with sharing class AccountHelperClass {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountRecords(){
        return [SELECT Id, Name, Industry, Type, Rating
                  FROM Account];
    }

    @AuraEnabled (cacheable=true)
    public static List<Account> findAccounts(String searchText){
        String searchKey = '%' + searchText + '%';
        return [SELECT Id, Name, Industry, Type, Rating
                  FROM Account
                  WHERE Industry LIKE :searchKey];
    }
}
