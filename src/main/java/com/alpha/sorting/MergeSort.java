package com.alpha.sorting;

/**
 * Implemention of merge sort
 *
 */
public class MergeSort {
    public static void main(String args[]) {
        int[] arr = { 5, 3, 6, 8, 1, 9 };
        mergeSort(arr, 0, 5);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    private static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }

    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        int[] l = new int[n1];
        int[] r = new int[n2];

        for (int i = 0; i < n1; i++) {
            l[i] = arr[left + i];
        }

        for (int i = 0; i < n2; i++) {
            r[i] = arr[mid + 1 + i];
        }
        int k = left, i = 0, j = 0;
        while (i < n1 && j < n2) {
            if (l[i] < r[j]) {
                arr[k++] = l[i++];
            } else {
                arr[k++] = r[j++];
            }

        }

        while (i < n1) {
            arr[k++] = l[i++];
        }

        while (j < n2) {
            arr[k++] = r[j++];
        }
    }
}
