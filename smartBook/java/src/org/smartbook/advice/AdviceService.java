package org.smartbook.advice;

import org.smartbook.model.Book;

import java.util.List;

public interface AdviceService
{
    List<Advice> adviceBooks(long profile);
}
