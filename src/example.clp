(deftemplate person (slot firstName) (slot lastName) (slot age))

(defrule welcome-toddlers 
    "Give a special greeting to young children"
    (person {age < 3})
=>
(printout t "Hello, little one!" crlf))

;(defrule same-first-and-last-name
;    (person {firstName == lastName})
;    =>
;    (printout t ?firstName " " ?lastName " is a funny name!" crlf))

(defrule teenager
    "Teenager rule"
    (person {age > 12 && age < 20} (firstName ?name)(age ?age))
    =>
    (printout t ?name " is " ?age " years old." crlf))

(defrule major
    "Major"
    (person {age > 20} (firstName ?name))
    
    =>
    (printout t "Congratulation " ?name " you are a major!" crlf))
;(watch all)

(reset)

(assert (person (firstName "A") (lastName "BEEE")(age 2)))
(assert (person (firstName "A") (lastName "BEEE") (age 19)))
(assert (person (firstName "Alpar") (lastName "Gal") (age 25)))

(run)