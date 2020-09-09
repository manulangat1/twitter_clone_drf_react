import pytest
from django.urls import reverse 


@pytest.fixture 
def api_client():
    from rest_framework.test import APIClient
    return APIClient()

@pytest.mark.django_db 
def test_postListAPI(api_client):
    url = reverse('post_list')
    response = api_client.get(url)
    assert response.status_code ==  200

@pytest.mark.django_db 
def test_postCreateAPI(api_client):
    posts = {
        "text":"Hey there",
        "slug":"now"
    } 
    url = reverse('post_list')
    res = api_client.post(url,posts)
    assert res.status_code ==201

@pytest.mark.django_db 
def test_postRetrieve(api_client):
    posts = {
        "text":"Hey there",
        "slug":"now"
    }
    url = reverse('post_list')
    res =  api_client.post(url,posts)
    yield res
    url1 = reverse('post_retrieve',kwargs={'slug':"now"})
    res1 = api_client.get(url1)
    assert res1.status_code == 200

