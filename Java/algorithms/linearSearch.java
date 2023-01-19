class linearSearch {
    public static boolean linearS(int[] array, int value) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return true;
            }
        }
        return false;

    }

    public static void main(String[] args) {
        int[] array1 = { 3, 6, 2, 5, 7, 1, 9 };
        int[] array2 = { 4, 9, 1, 7, 6, 3, 8 };

        if (linearS(array1, 7)) {
            System.out.println("Found!");
        } else {
            System.out.println("Not Found");
        }

        if (linearS(array2, 5)) {
            System.out.println("Found!");
        } else {
            System.out.println("Not Found");
        }
    }
}
