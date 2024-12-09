import java.util.*;
class main{
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); 
        set.add("Cherry");

        System.out.println(set);

        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Cherry");
        map.put(1, "Apricot"); 

        // System.out.println(map);


        Map<Integer,String> lernMap = new HashMap<>();
        lernMap.put(1,"Varu1");
        lernMap.put(2,"Varu2");
        lernMap.put(3,"Varu3");
        lernMap.put(4,"Varu4");
        // System.out.println(lernMap);
    }
}