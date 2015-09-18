from django import forms


class AddPartForm(forms.Form):
    mail = forms.CharField(label=u'Mail', max_length=100)
    url = forms.CharField(label=u'url_sites', max_length=100)