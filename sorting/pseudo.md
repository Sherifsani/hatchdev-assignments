ALGORITHM BubbleSort(array)
INPUT: array of n elements
OUTPUT: sorted array

BEGIN
    n ← length of array
    result ← copy of array
    
    FOR i ← 0 to n-2 DO
        swapped ← false
        
        FOR j ← 0 to n-i-2 DO
            IF result[j] > result[j+1] THEN
                SWAP result[j] and result[j+1]
                swapped ← true
            END IF
        END FOR
        
        IF swapped = false THEN
            BREAK  // Array is already sorted
        END IF
    END FOR
    
    RETURN result
END


ALGORITHM InsertionSort(array)
INPUT: array of n elements
OUTPUT: sorted array

BEGIN
    result ← copy of array
    n ← length of result
    
    FOR i ← 1 to n-1 DO
        key ← result[i]
        j ← i - 1
        
        WHILE j ≥ 0 AND result[j] > key DO
            result[j+1] ← result[j]  // Shift element right
            j ← j - 1
        END WHILE
        
        result[j+1] ← key  // Insert key at correct position
    END FOR
    
    RETURN result
END