   M S B A M L   `   `   `  ����N  JWPFAcademyMVVMFinal, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullE'clr-namespace:WPFAcademyMVVMFinal.ViewsWPFAcademyMVVMFinal.Views  5      O,clr-namespace:WPFAcademyMVVMFinal.ViewModelsWPFAcademyMVVMFinal.ViewModels  5      )    #WPFAcademyMVVMFinal.Views.ExamsView   5      \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      9local'clr-namespace:WPFAcademyMVVMFinal.Views     5      C
ViewModels,clr-namespace:WPFAcademyMVVMFinal.ViewModels     5      .��5      � ���	#FFE5E5E5  � DataContext  5   
   3   -WPFAcademyMVVMFinal.ViewModels.ExamsViewModel  5       � RowDefinitions 5   
   �� 5      $	��150 �6   �� 5      $��* �6   �� 5      $��40 �6   .+�5   
   � $��0��6   .+�5      �� $��Title��6   $
��Left=�6$   $��	22,10,0,0q�6?   $	��Top=�6R    J� RenderTransformOrigin$ -0.771,-0.594&�6j   $��78��6�   �� 5      $
��Text��6   $
��Left=�6#   $��	22,40,0,0q�6>   $	��Top=�6Q   $��78��6i   �� 5      $
��Date��6   $
��Left=�6#   $��	22,70,0,0q�6>   $	��Top=�6Q   $ 0.13,-0.391&�6i   $��78��6�   �� 5      $��Subject��6   $
��Left=�6&   $��
22,100,0,0q�6A   $	��Top=�6U   $ 0.13,-0.391&�6m   $��78��6�   �� 5      -   5         ��Name$ 	TitleText��5      $
��Left=�6C   $��23��6^   $��
125,10,0,0q�6j    �� TextWrapping$
 Wrap=�6~   $	��Top=�6�   $	��195��6�   $ 0.292,0.209&�6�   ��6)   �� *
TitleEVM+6�   �� 5      -   5        $ TextText��5      $
��Left=�6B   $��23��6]   $��
125,40,0,0q�6i   $
 Wrap=�6}   $	��Top=�6�   $	��195��6�   ��6)   �� *	TextEVM+6�   (  "System.Windows.Controls.DatePicker  5       $��125,73,445,54q�6      FirstDayOfWeek$ Monday=�60      SelectedDate 6H   �� *	DateEVM+�� 5!      -   5         ��Name$ ComboBoxSubjects��5!      $
��Left=�62   $��125,100,0,0q�6M   $	��Top=�6b   $	��195��6z   ��6�   �� *SubjectsNameListEV+  6�   ��  �� Mode$ OneWay=�	 �� SelectedItem	 6�   �� *CurrentSubjectNameEVM+�� 5"      $��REFRESH��6   $ 2.496,0.667&�6T   $��330,100,375,28q�6x   ��6'   �� *GetSubjectsNameEVCommand+6x   �� 5#      $��	Save Exam��6   $ 2.496,0.667&�6O   $��345,13,345,87q�6s   ��6)   �� *SaveExamEVCommand+6s   �� 5$      $��Lista de Errores��6   $
��Left=�6/   $��	590,3,0,0q�6J   $	��Top=�6]   $	��130��6u   $��Normal"�6�   $��Italic$�6�   � 5&      $��480,24,10,10q�6   ���	#FFBDC0CB.+�5'      &   System.Windows.Controls.DataGrid  ��6   �� *ErrorsListEV+5(      5*      � 5-   
   $��1��6   
 � ColumnDefinitions
 5/      �� 50      $��* �6#   �� 51      $
��Auto �6#   .+�54        -   5          Name$ ExamsDataGrid��54      $��0��6.   $��5,5,5,5q�6�      AutoGenerateColumns$ False��6�   ��6>   �� *ExamsListEV+	 6b   �� *CurrentExamEV+   Columns 55      0  *System.Windows.Controls.DataGridTextColumn  56      ,  &System.Windows.Controls.DataGridColumn   Header$ Title��6)   1  +System.Windows.Controls.DataGridBoundColumn   Binding 69   �� *Title+6U     57      $
 Text��6)    68   �� *Text+6S     58      $
 Date��6)    68   �� *Date+6T     59      $ Subject��6)    6:   �� *Subject.Name+6]     5:      $ IdExam��6)    6:   �� *Id+6T   5=      �� 5>      $��1��6   $��Editar��6'   
�������$��
0,5,10,140q�6q   ��68   �� *EditExamEVCommand+6q   �� 5?      $��1��6   $��Eliminar��6&   
�������$��
0,140,10,5q�6q   ��69   �� *DelExamEVCommand+6q   5A      � 5D   
   $��2��6   .+�5E      �� $��	Get Exams��6   $	��100��6O   $��0,5,60,5q�6[   $��Right=�6m   $ 0.9,3.5&�6�   ��6)   �� *GetExamsEVCommand+6�   5G      5J      5K      